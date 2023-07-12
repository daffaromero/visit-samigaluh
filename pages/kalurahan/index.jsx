import Card from "@/components/card";

export default function KalurahanPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8'>
      <h1 className='text-3xl'>Kalurahan</h1>
      <div className='flex space-x-8'>
        <Card
          imageSrc='/logo.jpg'
          title='Sidoharjo'
          description='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          buttonText='Read more'
          buttonLink={"/kalurahan/sidoharjo"}
        />
        <Card
          imageSrc='/kkn.png'
          title='Gerbosari'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur erat ut lectus tincidunt eleifend.'
          buttonText='Read more'
          buttonLink={"/kalurahan/gerbosari"}
        />
      </div>
    </div>
  );
}
