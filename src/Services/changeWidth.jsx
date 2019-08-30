// Mobile  < 720
// Desktop > 720


export const changeWidth = () => {
    let width = window.innerWidth;

    // if(width <= 720) width -= 50;
    //
    // else width = 1000;


    width *= .8;
    // console.log(width);
    if (width > 720) {
        width = 720;
    }

    return width;
};
