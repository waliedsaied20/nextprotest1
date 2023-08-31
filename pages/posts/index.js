import Image from "next/image";
import getImage from '../../public/Amazing Image.jpg'
import getImage1 from '../../public/amazing2.jpg'
import getImage2 from '../../public/amazing3.jpg'
import getImage3 from '../../public/pexels-james-wheeler-417074.jpg'
import getImage4 from '../../public/pexels-mohammed-ajwad-1685966.jpg'
import getImage5 from '../../public/pexels-tom.jpg'


function Posts() {
    const  getImages = [
        {img: getImage , title: 'Phone1'  },
        {img: getImage1 , title: 'Phone2'  },
        {img: getImage2 , title: 'Phone3'  },
        {img: getImage3 , title: 'Phone4' },
        {img: getImage4 , title: 'Phone5'  },
        {img: getImage5  , title: 'Phone6 '},
]
    const renderImage = getImages.map((image) => {
        return (
            <Image src={image.img} alt={image.title} className="rounded-xl hover:-translate-x-4 hover:-translate-y-4 hover:scale-105 duration-200 hover:cursor-pointer"/>
        )
    })
    return (
        <section >
        <h1 className="text-3xl selection:bg-white font-bold text-yellow-900 outline-blue-700 outline w-fit mx-auto my-3 p-2 rounded-xl border-gray-400 border-4 hover:border-red-500 hover:bg-red-600 hover:text-white ease-in-out">Posts page is working</h1>
        
        <p className="text-xl selection:bg-orange-400 select-none"> loream ipsoam welcome done  </p>
        <div className="bg-gray-700 py-12">

            <div className="w-4/5 mx-auto grid grid-cols-3  gap-3 ">
                {renderImage}
            </div>
        </div>
        </section>
    )
}


export default Posts;