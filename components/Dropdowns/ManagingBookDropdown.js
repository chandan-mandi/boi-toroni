import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { DotsVerticalIcon } from '@heroicons/react/solid'
import BookInfoUpdatingModal from 'components/Cards/BookInfoUpdatingModal';
import InsertBookCard from 'components/Cards/InsertBookCard';
import { useRouter } from 'next/router';
import swal from 'sweetalert';
import toast, { Toaster } from 'react-hot-toast';


const ManagingBookDropdown = ({id}) => {
  const router = useRouter();
  const handleBookUpdate = (id) => {
    console.log(id);
    router.push(`/admin/book_update/${id}`)
  }
  const handleDeleteBook = (id) => {
    swal({
        title: "Are you sure?",
        text: "Are you sure you want to delete!",
        icon: "warning",
        buttons: [true, "Yes"],
        dangerMode: true,
    }).then(wantDelete => {
        if (wantDelete) {
            const loadingId = toast.loading("Deleting...");
            const url = `http://localhost:5000/books/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    
                    if (data.deletedCount > 0) {
                        // const remaining = blogs.filter(blog => blog?._id !== id)
                        // setBlogs(remaining);
                        return toast.success('Successfully Deleted!', {
                          id: loadingId,
                      });
                    }
                })
                .catch(err => {
                    toast.dismiss(loading);
                    swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                })
        }
    })
}

  return (
        <>
            <Menu as="div">
                      <div>
                        <Menu.Button className="flex text-sm rounded-full focus:outline-none ">
                          <DotsVerticalIcon
                            className="w-5 h-5 ml-2 -mr-1 text-violet-400 hover:text-violet-600"
                            aria-hidden="true"
                         />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                      <Menu.Items className="absolute right-14 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
           
                      <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                        <button
                        onClick={() => handleBookUpdate(id)}
                        className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Update
                      </button>
                         )}
                    </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                        <button
                          onClick={() => handleDeleteBook(id)}
                          className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Delete
                        </button>
                         )}
                    </Menu.Item>
                    </div>
          </Menu.Items>
        </Transition>
        </Menu>
        <Toaster />
        </>
    );
};

export default ManagingBookDropdown;