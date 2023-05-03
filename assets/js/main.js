/*-----------------------------------------------------------------------------
Theme Name: staco
Author: uigigs
Author URL: https://themeforest.net/user/uigigs/portfolio
-----------------------------------------------------------------------------*/
(function ($) {
//    ("use strict");

    /*-- Faq Js Start --*/
    var FAQ = $(".faq-content");
    if (FAQ.length) {
        let accHeading = document.querySelectorAll(".accordion");
        let accPanel = document.querySelectorAll(".accordion-panel");

        for (let i = 0; i < accHeading.length; i++) {
            // Execute whenever an accordion is clicked 
            accHeading[i].onclick = function () {
                if (this.nextElementSibling.style.maxHeight) {
                    hidePanels(); // Hide All open Panels 
                } else {
                    showPanel(this); // Show the panel
                }
            };
        };

        // Function to Show a Panel
        function showPanel(elem) {
            hidePanels();
            elem.classList.add("active");
            elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
        };

        // Function to Hide all shown Panels
        function hidePanels() {
            for (let i = 0; i < accPanel.length; i++) {
                accPanel[i].style.maxHeight = null;
                accHeading[i].classList.remove("active");
            }
        };
    }
    /*-- Faq Js End --*/
    
    /*-- RoadMap Slider Start --*/
    var sliderRoadmap = $(".sliderRoadmap");
    if (sliderRoadmap.length) {
        $('.sliderRoadmap').slick({
            dots: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,

            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }
    /*-- RoadMap Slider End --*/
    

    /*-- Liquidity table collaps js Start --*/
    var liquidityPoolsTableCollaps = $(".liquidity-pools-farming-table");
    if (liquidityPoolsTableCollaps.length) {
        let collapsHeading = document.querySelectorAll(".collapsBtn");
        let collapsPanel = document.querySelectorAll(".collapsContent");

        for (let i = 0; i < collapsHeading.length; i++) {
            // Execute whenever an accordion is clicked 
            collapsHeading[i].onclick = function () {
                if (this.nextElementSibling.style.maxHeight) {
                    hidePanels(); // Hide All open Panels 
                } else {
                    showPanel(this); // Show the panel
                }
            };
        };

        // Function to Show a Panel
        function showPanel(elem) {
            hidePanels();
            elem.classList.add("active");
            elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
        };

        // Function to Hide all shown Panels
        function hidePanels() {
            for (let i = 0; i < collapsPanel.length; i++) {
                collapsPanel[i].style.maxHeight = null;
                collapsHeading[i].classList.remove("active");
            }
        };
    }
    /*-- Liquidity table collaps js End --*/
    
    /*-- cast-card-option js --*/
    var castRadioBtn = $("#castRadioBtn");
    if (castRadioBtn.length) {
        var header = document.getElementById("castRadioBtn");
        var btns = header.getElementsByClassName("cast-card-radio-btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
    /*-- cast-card-option js --*/
    
    
    
    /*
    var v7FooterArea = $(".v7-footer-area");
    if (v7FooterArea.length) {
        
    }
    */

})(jQuery);

/*-- Liquidity Table Tab Js start --*/
var liquidityFarmingSection = $(".liquidity-farming-section");
if (liquidityFarmingSection.length) {
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("liquidity-tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("liquidity-tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("liquidity-tablinks-defaultOpen").click();
}
/*-- Liquidity Table Tab Js End --*/


/*-- nft-details-tab js start --*/
var nftDetailsTab = $(".nft-details-tab");
if (nftDetailsTab.length) {
    function openTab(evt, TabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("nftTabContent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("nftTablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(TabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultNftTabOpen").click();
}
/*-- nft-details-tab js End --*/

/*-- voting-section-left js start --*/
var votingSectionLeft = $(".voting-section-left");
if (votingSectionLeft.length) {
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("votingTabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("votingTablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultTabOpen").click();
}
/*-- voting-section-left js end --*/
