import React, {useState} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/imageList';
import logo from './logo.png';

const App = () => {
    const [images, setImages] = useState([]);
    const ApiKey = "19808198-9a2904ae2706f23235bd99013";//process.env.REACT_APP_PIXABAY_APIKEY;
    const onSearchSubmit = async(term) => {
        try {
            const params = {
                key: ApiKey,
                q: term,
            };
            const response = await axios.get("https://pixabay.com/api/",{params});
            setImages(response.data.hits);
            if (response.data.total === 0 ) {
                window.alert('お探しの画像はありません。');
            }
        } catch {
            window.alert('写真の取得に失敗しました。');
        }
    };

    return (
        <div className='ui container' style={{marginTop:'20px'}}>
            <img src={logo} alt='pixabay-logo' className='pixabay-logo' />
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    );
};

export default App;