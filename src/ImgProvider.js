/*
* We import all the images in the code so that the service worker will cache them.
*/


function importAll(r) 
{
  return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.png$/));


export default function findImage(img)
{
  return images.find((i) =>
  {
    const splitArray = i.split('/').slice(-1)[0].split('.');
    const imgName = splitArray[0] + '.' + splitArray[2];

    return imgName === img;
  })
}
