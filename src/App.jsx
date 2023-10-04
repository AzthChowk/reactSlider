import ImageSlider from "./ImageSlider";

function App() {
  const slides = [
    {
      url: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "beach",
    },
    {
      url: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "boat",
    },
    {
      url: "https://images.pexels.com/photos/1269808/pexels-photo-1269808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "forest",
    },
    {
      url: "https://images.pexels.com/photos/655676/pexels-photo-655676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "city",
    },
    {
      url: "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "italy",
    },
  ];
  const containerStyles = {
    width: "100vw",
    height: "95vh",
  };

  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
        <h3>hello world</h3>
      </div>
    </div>
  );
}

export default App;
