/* eslint-disable react/prop-types */

const SectionTitle = ({subTitle,heading}) => {
    return (
        <div className="sm:max-w-10 md:max-w-20 lg:max-w-96 mx-auto text-center my-10">
            <h1 className="text-yellow-400 mb-2">--{subTitle}--</h1>
            <h1 className="text-base md:text-2xl lg:text-2xl uppercase border-y-2 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;