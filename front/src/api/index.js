import axios from 'axios';
//백으로 신호 보냄
//앨범 정보 가져오기 
function getAlbumInfo(){
    const url = 'http://localhost:3000/album';
    return axios.get(url);
}
function getSongInfo(){
    const url = 'http://localhost:3000/album';
    return axios.get(url);
}

export { getAlbumInfo, getSongInfo }