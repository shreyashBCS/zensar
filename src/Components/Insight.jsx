// import React from 'react';

// function Insights() {
//     return (
//         <div className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
//             {/* Left Side - Text Section */}
//             <div className="md:w-1/3 flex flex-col justify-center mb-8 md:mb-0 md:mr-8">
//                 <h2 className="text-4xl font-bold mb-4">Insights</h2>
//                 <p className="text-lg text-gray-700 mb-4">
//                     Our thinking on ideas, technology, and trends that create impact
//                 </p>
//                 <button className="py-2 px-2 bg-black text-white font-semibold rounded-none flex items-center space-x-2">
//                     <span>Read more</span>
//                     <span>&rarr;</span>
//                 </button>
//             </div>

//             {/* Right Side - Image Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
//                 {/* Card 1 */}
//                 <div className="flex flex-col items-center">
//                     <img
//                         src="image1.jpg"
//                         alt="Insight 1"
//                         className="w-full h-60 object-cover rounded-lg shadow-md"

//                     />
//                     <button className="mt-4 py-2 px-6 bg-black text-white font-semibold rounded-md flex items-center space-x-2">
//                         <span>Read</span>
//                         <span>&rarr;</span>
//                     </button>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="flex flex-col items-center">
//                     <img
//                         src="image2.jpg"
//                         alt="Insight 2"
//                         className="w-full h-60 object-cover rounded-lg shadow-md"
//                     />
//                     <button className="mt-4 py-2 px-6 bg-black text-white font-semibold rounded-md flex items-center space-x-2">
//                         <span>Read</span>
//                         <span>&rarr;</span>
//                     </button>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="flex flex-col items-center">
//                     <img
//                         src="image3.jpg"
//                         alt="Insight 3"
//                         className="w-full h-60 object-cover rounded-lg shadow-md"
//                     />
//                     <button className="mt-4 py-2 px-6 bg-black text-white font-semibold rounded-md flex items-center space-x-2">
//                         <span>Read</span>
//                         <span>&rarr;</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Insights;
import React from 'react';

function Insights() {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
            {/* Left Side - Text Section */}
            <div className="md:w-1/3 flex flex-col justify-center mb-8 md:mb-0 md:mr-8">
                <h2 className="text-4xl font-bold mb-4">Insights</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Our thinking on ideas, technology, and trends that create impact
                </p>
                <button className="py-2 px-6 bg-black text-white font-semibold rounded-md flex items-center space-x-2">
                    <span>Read more</span>
                    <span>&rarr;</span>
                </button>
            </div>

            {/* Right Side - Image Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
                {/* Card 1 */}
                <div className="flex flex-col items-center">
                    <img
                        src="image1.jpg"
                        alt="Insight 1"
                        className="w-full h-60 object-cover rounded-lg shadow-md"
                    />
                    <button className="mt-4 py-2 px-6 bg-black text-white font-semibold rounded-md flex items-center space-x-2">
                        <span>Read</span>
                        <span>&rarr;</span>
                    </button>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                    <img
                        src="image2.jpg"
                        alt="Insight 2"
                        className="w-full h-60 object-cover rounded-lg shadow-md"
                    />
                    <button className="mt-4 py-2 px-6 bg-black text-white font-semibold rounded-md flex items-center space-x-2">
                        <span>Read</span>
                        <span>&rarr;</span>
                    </button>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center">
                    <img
                        src="image3.jpg"
                        alt="Insight 3"
                        className="w-full h-60 object-cover rounded-lg shadow-md"
                    />
                    <button className="mt-4 py-2 px-6 bg-black text-white font-semibold rounded-md flex items-center space-x-2">
                        <span>Read</span>
                        <span>&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Insights;
