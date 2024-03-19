import { deleteCommentidurl } from "../../constants/api";
import useApi from "../../hooks/useApi";


function DeleteButton() {

    const { data, isLoading, error  } = useApi(deleteCommentidurl);

    if (isLoading) {
      return <div>Delete this post...</div>;
    }
  
    if (error) {
      return <div>Deleting this post was not possible</div>;
    }

    function handleDelete() {
         
    }

    return ( 

        <DeleteButton onClick={handleDelete}>
            DELETE
        </DeleteButton>

    );
}

export default DeleteButton;