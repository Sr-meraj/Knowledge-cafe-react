/* eslint-disable react/prop-types */
const Bookmark = ({booked}) => {
    return (
        <div>
            <ul className="mt-3 m-auto w-5/5 py-3 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 font-bold rounded-t-lg dark:border-gray-600">
                    <h2 className="text-md">
                        {booked.blogTitle}
                    </h2>
                </li>
            </ul>
        </div>
    );
};

export default Bookmark;