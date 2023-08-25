import React, { useEffect } from 'react';
import $ from 'jquery';

function Preloader() {
    useEffect(() => {
        $(window).on("load", function() {
            $(".preloader").fadeOut("slow");
        });

        // Clean up the event listener when the component is unmounted
        return () => {
            $(window).off("load");
        };
    }, []);

    return (
        <div className="preloader">
            <span></span>
        </div>
    );
}

export default Preloader;

