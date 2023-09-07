window.onscroll = function () {
    scrollFunction()
};

const styles = {
    logoStyle: {
        top: "10px",
        width: "80px"
    }
}


function scrollFunction() {
    if (document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90) {
        document.querySelector(".navbar")
            .style.transform = "translateY(0)";

        // document.querySelector(".logoLoteriaHeader")
        //     .style.fontSize = "24px";
        // document.querySelector(".navbar")
        //     .style.backgroundColor = "#fff";
        // document.querySelector(".ulFlex")
        //     .style.display = "block"

        document.querySelector(".logoLoteriaHeader").style.transform = "translateY(0)";

        document.querySelector(".flexNavbar2").style.transform = "translateY(0)";
        document.querySelector(".logoLoteriaHeader").style.width = "80px"
        document.querySelector(".logoLoteriaHeader").style.borderRadius = "0px"
    }
    else {
        document.querySelector(".navbar")
            .style.transform = "translateY(-100px)";

        // document.querySelector(".logoLoteriaHeader")
        //     .style.fontSize = "45px";
        // document.querySelector(".navbar")
        //     .style.backgroundColor = "rgba(255, 255, 255, 0)";
        // document.querySelector(".ulFlex")
        //     .style.display = "none"

        document.querySelector(".logoLoteriaHeader").style.transform = "translateY(100px)";
        document.querySelector(".logoLoteriaHeader").style.width = "100px"
        document.querySelector(".logoLoteriaHeader").style.borderRadius = "0 0 8px 8px"

        document.querySelector(".flexNavbar2").style.transform = "translateY(100px)";
        document.querySelector(".logoLoteriaHeader").style.width = "100px"
        document.querySelector(".logoLoteriaHeader").style.borderRadius = "0 0 8px 8px"

    }
}