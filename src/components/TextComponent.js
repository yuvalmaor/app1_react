import React from 'react';




const TextComponent = ({ text }) => {

return (
    <div className="py-16">
        <p className="text-center text-lg sm:text-xl md:text-3xl lg:text-4xl text-red-500">
            {text}
        </p>
    </div>
        );
    };
export default TextComponent;



