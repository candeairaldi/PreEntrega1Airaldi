import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
//import { getProductById } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from '../../config/configfirebase';
import { getDoc, doc } from "firebase/firestore";



export const ItemDetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  // Efecto para cargar la información
  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemRef = doc(db, 'products', id);
        const docSnap = await getDoc(itemRef);
        
        // Verifica si el documento existe 
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error en el Producto",
            text: "El producto que intenta buscar no existe",
          }).then((result) => {
            // Si el usuario hace clic en "OK", redirige a la página de inicio
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      } catch (error) {
        console.error('Error');
      }
    };

    // Llama a la función fetchData
    fetchData();
  }, [id, navigate]);

  return (
    <>
      <div className="contair">
        {item && <ItemDetail {...item} />}
      </div>
    </>
  );
};




/* export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect( () => { 
      getProductById(id)
        .then(resp => setItem(resp))
        .catch(error => console.log(error));
        
    }, [])
  return (
    <>
    {item && <ItemDetail {...item} />}
    </>
  )
} */