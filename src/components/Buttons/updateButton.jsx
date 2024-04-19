// A registered user may update a Post they own.
// Update a post based on its id. This endpoint returns the updated post.

import { StyledUpdateButton } from "./Button.styles";

function UpdateButton() {

  const [update, setUpdate] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);


    async function onSubmit(update) {
        console.log(update);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(),
      };


      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}/social/posts/${id}`, options);
        const json = await response.json();

        setFollow(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 

      getData();
    }, [id]); 
    

        if (isLoading) {
           return <h3>Follow profile</h3>;
        }

  
        if (isError) {
           return <div>An error occured when following this profile</div>;
        }
    

    function onButtonClick() {

    }

    return ( 

        {update.map((updates) => (
            <div key={updates.id}>
          <StyledUpdateButton onClick={onButtonClick}>
            UPDATE
          </StyledUpdateButton>
    );
}

export default UpdateButton;

