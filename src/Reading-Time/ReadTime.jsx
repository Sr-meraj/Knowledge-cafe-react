
// eslint-disable-next-line react/prop-types
const ReadTime = ({ReadTime}) => {
    return (
        <div className="px-10 py-4 rounded-xl border border-indigo-700 bg-indigo-200">
            <h2 className="text-[#6047EC] text-lg text-center font-semibold">
                Spent time on read : {ReadTime} min
            </h2>
        </div>
    );
};

export default ReadTime;