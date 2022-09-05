let tl1 = gsap.timeline();

var tl2__ready = false;
var done = false;

tl1.from(".line .title__2", 0.4, {
    y: 80,
    ease: "power3.out",
    opacity: 0,
    delay: 0.5,
}, 0)
tl1.from(".line .title__1", 0.4, {
    y: 90,
    ease: "power4.out",
    opacity: 0,
}, 0)
tl1.from(".line .elem__quote__1", 0.2, {
    y: -40,
    ease: "power4.out",
    opacity: 0,
}, 2)
tl1.from(".line .elem__quote__2", 0.4, {
    y: -20,
    ease: "power4.out",
    opacity: 0,
}, 3)
tl1.from(".line .link__1", 0.25, {
    y: -10,
    ease: "power4.out",
    opacity: 0,
}, 4)
tl1.from(".line .link__2", 0.25, {
    y: -20,
    ease: "power4.out",
    opacity: 0,
}, 5)
tl1.from(".line .scroll__btn", 0.4, {
    y: -20,
    ease: "power4.out",
    opacity: 0,
    skewY: 10,
}, 7);


setTimeout(() => {
    tl2__ready = true;
}, "6000")


document.addEventListener('wheel', function () {
    if (done == false && tl2__ready == true) {

        let tl2 = gsap.timeline();
        tl2.to(".scroll__btn", 1, {
            ease: "power3.out",
            opacity: 0,
        }, 2)

        tl2.to(".title__1", 0.8, {
            y: '-18vh',
            fontSize: 24,
            ease: "power3.out",
            opacity: 1
        }, 0)

        tl2.to(".title__2", 0.8, {
            y: '-18vh',
            fontSize: 24,
            ease: "power3.out",
            opacity: 1
        }, 0)

        tl2.to(".elem__quote__1", 0.2, {
            ease: "power3.out",
            opacity: 0
        }, 1)

        tl2.to(".elem__quote__2", 0.2, {
            ease: "power3.out",
            opacity: 0
        }, 1)
        tl2.to(" .elem__slider", 1, {
            ease: "power3.out",
            opacity: 1,
            skewY: 0,
        }, 2)
        tl2.to(".scroll__btn", 0, {
            ease: "power3.out",
            opacity: 0,
        }, 2)
        tl2.to(".projet__btn", 2, {
            y: 10,
            ease: "power3.out",
            opacity: 1,
        }, 2)

        done = true;
        document.querySelector('.elem__inner__slider').style.pointerEvents = 'auto';
        document.querySelector('.elem__slider').setAttribute('data-cursor-text', 'SCROLL');
        document.querySelector('.elem__slider').style.pointerEvents = 'auto';
    }
})



let items = [...document.querySelectorAll('.item__inner')];
const slider = document.querySelector('.elem__inner__slider');
const sliderParent = slider.parentElement;
items.forEach((item, idx) => {
    item.style.backgroundImage = `url(./images/${idx + 1}.jpg)`
})

sliderParent.addEventListener('wheel', (e) => {
    e.preventDefault();
    let value = (parseInt(slider.style.transform.split('(')[1]) || 0);
    value -= e.deltaY;

    if (value >= 0) {
        value = -(slider.getBoundingClientRect().width / 2) + 30
    }
    if (value <= -(slider.getBoundingClientRect().width / 2) + 29) {
        value = 1
    }
    slider.style.transform = `translateX(${value}px)`
})

var isMobile = false;

if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
    .test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
    .test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

if (isMobile) {
    sliderParent.style.height = '80%'
    sliderParent.style.overflow = 'scroll'
    let {
        width
    } = slider.getBoundingClientRect();
    slider.style.width = `${width / 2}px`
} else {
    items.forEach(item => {
        let clone = item.parentElement.cloneNode(true);
        clone.classList.add('clone');
        slider.appendChild(clone);

    })

}

items = [...document.querySelectorAll('.item__inner')]

let is_stopping = false;

function animate() {
    if (is_stopping == true) {
        for (let i = 0; i < items.length; i++) {
            let {
                left
            } = items[i].parentElement.getBoundingClientRect();
            items[i].style.transform =
                `translate3D(0px, 0, 0)`
        }
        requestAnimationFrame(animate)


    } else {
        for (let i = 0; i < items.length; i++) {
            let {
                left
            } = items[i].parentElement.getBoundingClientRect();
            items[i].style.transform =
                `translate3D(${((left - ((window.innerWidth / 2) - 150)) * 0.2) * -1}px, 0, 0)`
        }

        requestAnimationFrame(animate)
    }
}

animate()

items.forEach((item, index) => {
    item.addEventListener('click', function () {
        let root = document.documentElement;
        var tl = gsap.timeline();

        var rect = item.getBoundingClientRect();
        let mywidth = rect.width;
        let myheight = rect.height;
        let mytop = rect.y;
        let myleft = rect.x;

        root.style.setProperty('--clicked_height', mywidth + 'px');
        root.style.setProperty('--clicked_width', myheight + 'px');
        root.style.setProperty('--clicked_y', mytop + 'px');
        root.style.setProperty('--clicked_x', myleft + 'px');
        let target_link = item.getAttribute('data-link');
        is_stopping = true;
        animate();

        var element = document.body.appendChild(item);
        element.className = 'before_transition'
        element.classList.remove('item-inner');

        tl.to('.before_transition', {
            top: 0,
            left: 0,
            delay: 0,
            width: '100vw',
            height: '100vh',
            duration: 2,
            ease: "power4",
            immediateRender: true,
        }, 0)

        tl.to('.main', {
            opacity: 0,
            y: 3500,
            duration: 4
        }, 0)
        setTimeout(() => {

            window.location.href = target_link
        }, 3000);
    });
});
petitnomsympa = document.querySelector('.petit__nom__sympa');

document.addEventListener('mousemove', function (e) {
    petitnomsympa.style.top = e.pageY + "px";
    petitnomsympa.style.left = e.pageX + "px";
});

document.querySelector('.image__span__1').addEventListener('mouseover', function () {
    petitnomsympa.style.backgroundImage = "url('/assets/images/titres/rose.png')";
    petitnomsympa.style.height = '25vh';
    petitnomsympa.style.width = '15vw';

});

document.querySelector('.image__span__1').addEventListener('mouseout', function () {
    petitnomsympa.style.backgroundImage = "url('')";
    petitnomsympa.style.height = '0';
    petitnomsympa.style.width = '0';
});

document.querySelector('.image__span__2').addEventListener('mouseover', function () {
    petitnomsympa.style.backgroundImage = "url('/assets/images/titres/silkykiss.png')";
    petitnomsympa.style.height = '30vh';
    petitnomsympa.style.width = '15vw';

});

document.querySelector('.image__span__2').addEventListener('mouseout', function () {
    petitnomsympa.style.backgroundImage = "url('')";
    petitnomsympa.style.height = '0';
    petitnomsympa.style.width = '0';
});

document.querySelector('.image__span__3').addEventListener('mouseover', function () {
    petitnomsympa.style.backgroundImage = "url('/assets/images/titres/lol.png')";
    petitnomsympa.style.height = '15vh';
    petitnomsympa.style.width = '30vw';

});

document.querySelector('.image__span__3').addEventListener('mouseout', function () {
    petitnomsympa.style.backgroundImage = "url('')";
    petitnomsympa.style.height = '0';
    petitnomsympa.style.width = '0';
});

document.querySelector('.image__span__4').addEventListener('mouseover', function () {
    petitnomsympa.style.backgroundImage = "url('/assets/images/georama+/insta1.png')";
    petitnomsympa.style.height = '25vh';
    petitnomsympa.style.width = '15vw';

});

document.querySelector('.image__span__4').addEventListener('mouseout', function () {
    petitnomsympa.style.backgroundImage = "url('')";
    petitnomsympa.style.height = '0';
    petitnomsympa.style.width = '0';
});