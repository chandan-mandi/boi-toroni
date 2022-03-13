import Link from "next/link"

const AboutUsBanner = () => {
    const skills = [
        {id:1, skill: 'Customer Favorites', value: '90%'},
        {id:1, skill: 'Popular Authors', value: '95%'},
        {id:1, skill: 'Bestselling Series', value: '85%'},
    ]
  return (
    <div className="h-[400px] w-full ">
        {/* inner container */}
        <div className="h-full w-full flex items-center justify-center text-white"  style={{background: `url(/aboutBanner.jpg) no-repeat center`, backgroundSize:'cover', height:'100%', width:'100%'}}>
             {/* text & link */}
        <div>
        <h1 className="text-4xl">About Us</h1>
            <Link  href="/">
                <a className="mr-4 inline-block">
                    Home
                </a>
            </Link>
            <span>/</span>
            <Link href="/aboutUs">
                <a className="ml-4 text-orange-300">
                    About Us
                </a>
            </Link>
        </div>

        </div>


         {/* skills  & about text*/}
       
        

        </div>
  )
}

export default AboutUsBanner