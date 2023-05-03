/*---------------------------------
Select token script start
-----------------------------------*/
//select-token-from script
var selectTokenFromBtn = document.getElementById('select-token-from').querySelector('.select-token-btn');

selectTokenFromBtn.addEventListener('click', function() {
    //modal open
    var selectTokenModal = new bootstrap.Modal(document.getElementById('select-token-modal'));
    selectTokenModal.show();
    
    //select token list style
    document.getElementById('select-token-list').classList.add('active');
    document.getElementById('select-token-list2').classList.remove('active');
    document.getElementById('select-token-list3').classList.remove('active');
    document.getElementById('select-token-list4').classList.remove('active');
    
    //select token list
    var selectTokenList = document.getElementById('select-token-modal').querySelector('#select-token-list');
    var selectTokenListLi = selectTokenList.querySelectorAll('li');
    
    Array.from(selectTokenListLi).forEach(function(item){
        item.addEventListener('click', function(){
            //selected token data stored
            var coinImgSrc = item.querySelector('img').getAttribute('src');
            var coinText = item.querySelector('.coin-text').innerHTML;
            
            //selected token data updated
            selectTokenFromBtn.querySelector('img').src = coinImgSrc;
            selectTokenFromBtn.querySelector('span').innerHTML = coinText;
            
            //modal close
            selectTokenModal.hide();
        });
    });  
});

//select-token-to script
var selectTokenToBtn = document.getElementById('select-token-to').querySelector('.select-token-btn');

selectTokenToBtn.addEventListener('click', function() {
    //modal open
    var selectTokenModal = new bootstrap.Modal(document.getElementById('select-token-modal'));
    selectTokenModal.show();
    
    //select token list style
    document.getElementById('select-token-list').classList.remove('active');
    document.getElementById('select-token-list2').classList.add('active');
    document.getElementById('select-token-list3').classList.remove('active');
    document.getElementById('select-token-list4').classList.remove('active');
    
    //select token list
    var selectTokenList = document.getElementById('select-token-modal').querySelector('#select-token-list2');
    var selectTokenListLi = selectTokenList.querySelectorAll('li');
    
    Array.from(selectTokenListLi).forEach(function(item){
        item.addEventListener('click', function(){
            //selected token data stored
            var coinImgSrc = item.querySelector('img').getAttribute('src');
            var coinText = item.querySelector('.coin-text').innerHTML;
            
            //selected token data updated
            selectTokenToBtn.querySelector('img').src = coinImgSrc;
            selectTokenToBtn.querySelector('span').innerHTML = coinText;
            
            //modal close
            selectTokenModal.hide();
        });
    });  
});

//select-token-from2 script
var selectTokenFromBtn2 = document.getElementById('select-token-from2').querySelector('.select-token-btn');

selectTokenFromBtn2.addEventListener('click', function() {
    //modal open
    var selectTokenModal = new bootstrap.Modal(document.getElementById('select-token-modal'));
    selectTokenModal.show();
    
    //select token list style
    document.getElementById('select-token-list').classList.remove('active');
    document.getElementById('select-token-list2').classList.remove('active');
    document.getElementById('select-token-list3').classList.add('active');
    document.getElementById('select-token-list4').classList.remove('active');
    
    //select token list
    var selectTokenList = document.getElementById('select-token-modal').querySelector('#select-token-list3');
    var selectTokenListLi = selectTokenList.querySelectorAll('li');
    
    Array.from(selectTokenListLi).forEach(function(item){
        item.addEventListener('click', function(){
            //selected token data stored
            var coinImgSrc = item.querySelector('img').getAttribute('src');
            var coinText = item.querySelector('.coin-text').innerHTML;
            
            //selected token data updated
            selectTokenFromBtn2.querySelector('img').src = coinImgSrc;
            selectTokenFromBtn2.querySelector('span').innerHTML = coinText;
            
            //modal close
            selectTokenModal.hide();
        });
    });  
});

//select-token-to2 script
var selectTokenToBtn2 = document.getElementById('select-token-to2').querySelector('.select-token-btn');

selectTokenToBtn2.addEventListener('click', function() {
    //modal open
    var selectTokenModal = new bootstrap.Modal(document.getElementById('select-token-modal'));
    selectTokenModal.show();
    
    //select token list style
    document.getElementById('select-token-list').classList.remove('active');
    document.getElementById('select-token-list2').classList.remove('active');
    document.getElementById('select-token-list3').classList.remove('active');
    document.getElementById('select-token-list4').classList.add('active');
    
    //select token list
    var selectTokenList = document.getElementById('select-token-modal').querySelector('#select-token-list4');
    var selectTokenListLi = selectTokenList.querySelectorAll('li');
    
    Array.from(selectTokenListLi).forEach(function(item){
        item.addEventListener('click', function(){
            //selected token data stored
            var coinImgSrc = item.querySelector('img').getAttribute('src');
            var coinText = item.querySelector('.coin-text').innerHTML;
            
            //selected token data updated
            selectTokenToBtn2.querySelector('img').src = coinImgSrc;
            selectTokenToBtn2.querySelector('span').innerHTML = coinText;
            
            //modal close
            selectTokenModal.hide();
        });
    });  
});
/*---------------------------------
Select token script end
-----------------------------------*/

/*----------------------------------
swap price chart scripts start 
-----------------------------------*/
var options = {
    series: [{
        name: 'Price',
        data: [700,500,800,400,900,400,400,750,900,700,1050,1800,1800,2300,1800,2200,1900,2400,2000,2050,1900,1400,1800,1700,1700,1800,1600,1600,900,1050,1300]
    }],
    chart: {
        height: 448,
        type: 'area',
        toolbar: {
            show: false
        }
    },
    colors: ['#33EFB0'],
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.60,
            opacityTo: 0,
        },
    },
    grid: {
        show: true,
        borderColor: '#ffffff1a',
        strokeDashArray: 4,
        position: 'back',  
        yaxis: {
            lines: {
                show: true
            }
        },  
    },
    legend: {
        show: false,
    },
    tooltip: {
        theme: true,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: ['#16C784'],
        width: 2,
    },
    xaxis: {
        type: 'category',
        tickAmount: 6,
        categories: ["6:00 AM", "6:00 AM", "6:00 AM", "6:00 AM", "9:00 AM", "9:00 AM", "9:00 AM", "9:00 AM", "12:00 PM", "12:00 PM", "12:00 PM", "12:00 PM", "3:00 PM", "3:00 PM", "3:00 PM", "3:00 PM", "6:00PM", "6:00PM", "6:00PM", "6:00PM", "9:00 PM", "9:00 PM", "9:00 PM", "9:00 PM", "12:00 AM", "12:00 AM", "12:00 AM", "12:00 AM", "3:00 AM", "3:00 AM", "3:00 AM"],
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            offsetX: 8,
            rotate: 0,
            rotateAlways: false,
            style: {
                cssClass: 'apexcharts-xaxis-label',
            },
        },
        tooltip: {
            enabled: false,
        },
        crosshairs: {
            show: true,
            stroke: {
                color: '#ffffff26',
                width: 1,
                dashArray: 4,
            },
        },
    },
    yaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                cssClass: 'apexcharts-xaxis-label',
            },
            formatter: function (value) {
                return "$ " + value;
            },
        },
    },
    markers: {
        size: 0,
        colors: ['#16C784'],
        strokeColors: '#1D2329',
        strokeWidth: 5,
        strokeOpacity: 1,
        strokeDashArray: 0,
        fillOpacity: 1,
    },
    responsive: [
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 355,
                },
                xaxis: {
                    tickAmount: 3,
                    labels: {
                        //offsetX: 10,
                    },
                },
            },
        },
        {
            breakpoint: 992,
            options: {
                chart: {
                    height: 350,
                },
                xaxis: {
                    tickAmount: 3.5,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 300,
                },
                xaxis: {
                    tickAmount: 3.5,
                },
            },
        },
        {
            breakpoint: 481,
            options: {
                chart: {
                    height: 250,
                },
                xaxis: {
                    tickAmount: 3,
                    labels: {
                        offsetX: 25,
                        rotate: -45,
                    },
                },
               
            },
        },
        {
            breakpoint: 376,
            options: {
                chart: {
                    height: 250,
                },
                xaxis: {
                    tickAmount: 2,
                },
            },
        },
    ],
};

var chart = new ApexCharts(document.querySelector("#swap-price-chart"), options);
chart.render();

//date update display
var yValue3 = document.getElementById('swap-price-chart').querySelector('.apexcharts-tooltip-text-y-value');
var priceUpdate3 = document.getElementById('swap-price-card').querySelector('.price-update');
$('#swap-price-chart').on('mouseenter', function () {
    $(this).on('mousemove', function() {
        priceUpdate3.innerHTML = yValue3.innerHTML;
    });
});
$('#swap-price-chart').on('mouseleave', function () {
    priceUpdate3.innerHTML = "$ 1856.55";
});
/*---------------------------------- 
swap price chart scripts end 
----------------------------------*/