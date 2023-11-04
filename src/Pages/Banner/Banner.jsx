import { useLottie } from "lottie-react";
import BannerData from "../../assets/Lottie/Banner.json";

const Banner = () => {
    const options = {
        animationData: BannerData,
        loop: true
      };
    
      const { View } = useLottie(options);

    return (
        <div className="flex min-h-screen max-w-7xl mx-auto">
            <div className=" ">
                <h1 className="text-5xl font-bold mr-10 mt-40 mb-6"> Collaborate, Illuminate,<br></br> Elevate  Empowering Minds <br></br> Through Group Study! </h1>
                <p>Strength in Numbers, Excellence in Assignments: Uniting Minds, Achieving Success!</p>
            </div>
            <div className="h-[500px] w-[500px] mx-auto my-10">
            {View}
            </div>;
        </div>
    );
}

export default Banner;