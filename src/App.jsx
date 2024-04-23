import styled from "styled-components"
import { useState } from "react"
import GlobalStyle from "./Components/GlobalStyle"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
import Banner from "./Components/Banner"
import Galery from "./Components/Galery"

import bannerImage from './assets/banner.png'
import photos from './fotos.json'
import Modal from "./Components/Modal"

const Background = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GaleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [galeryPhotos, setGaleryPhotos] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null) 
  const [filter, setFilter] = useState("")

  const toggleFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }
    
    setGaleryPhotos(galeryPhotos.map(photoDaGaleria => {
      return {
        ...photoDaGaleria,
        favorite: photoDaGaleria.id === photo.id ? !photo.favorite : photoDaGaleria.favorite
      }
    }))
  }

  const filteredPhotos = galeryPhotos.filter(photo =>
    photo?.titulo.toLowerCase().includes(filter.toLowerCase())
  );

  const onChangeFilter = (filterValue) => {
    setFilter(filterValue)
  }

  return (
    <Background>
      <GlobalStyle />
      <AppContainer>
        <Navbar filterValue={ filter } onChangeFilter={ onChangeFilter }/>
        <MainContainer>
          <Sidebar />
          <GaleryContent>
            <Banner image={ bannerImage } text="A Galeria mais completa de fotos do Espaço!"/>
            <Galery 
              onSelectPhoto={ photo => setSelectedPhoto(photo) } 
              photos={ filteredPhotos }
              onToggleFavorite={ toggleFavorite }
            />
          </GaleryContent>
        </MainContainer>
      </AppContainer>
      <Modal photo={ selectedPhoto } onClosePhoto={ () => setSelectedPhoto(null) } onToggleFavorite={ toggleFavorite }/>
    </Background>
  )
}

export default App
