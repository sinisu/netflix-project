export const getGenre = (genreData,genreIdList) => {
    if(!genreData) return []
    const genreNameList = genreIdList.map((id)=>{
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name
    })
    return genreNameList;
  }