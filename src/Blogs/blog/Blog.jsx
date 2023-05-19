import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const blog = (props) => {
    // console.log(props.blog);
    const { authorImage, name, registered, Readtime, picture, blogTitle, about, tags } = props.blog
    const markReadhandeler = props.markReadhandeler
    const BookmarkHandeler = props.BookmarkHandeler

    return (
        <>
            <div className="">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w mb-5">
                    <a href="#">
                        <img className="rounded-t-lg object-cover h-[80vh] w-full" src={picture} alt="" />
                    </a>
                    <div className="p-5">
                        <div className="flex justify-between item-center my-2">
                            <div className="flex justify-between gap-2">
                                <div className="flex items-center">
                                    <img src={authorImage} alt="" className="w-12 h-12 rounded-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold">
                                        {name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {registered}
                                    </p>
                                </div>
                            </div>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                {Readtime} mins read  <a onClick={() => { BookmarkHandeler(props.blog)}} className='text-lg cursor-pointer mx-1'><FontAwesomeIcon icon={faBookmark} /></a>
                            </p>
                        </div>
                        <div className="py-3">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{blogTitle}</h5>
                            <p className="font-normal text-gray-700 mb-3">{about}</p>

                            <div className="flex flex-wrap gap-x-3">
                                {tags.map(tag => <tag key={Math.random()} className="font-bold">#{tag}</tag>)}
                            </div>
                            <button className="text-sm py-2 text-start text-blue-700 font-bold underline text-capitalize cursor-pointer" 
                            onClick={()=>{markReadhandeler(Readtime)}}
                            >
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
};

export default blog;