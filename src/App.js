import Banner from './components/Banner';
import TextInput from './components/TextInput';

function App() {
  return (
    <div>
      <Banner/>
      <TextInput label="Name" placeholder="Type the name"/>
      <TextInput label="Role" placeholder="Type the role"/>
      <TextInput label="Image" placeholder="Type the image address"/>
    </div>
  );
}

export default App;
