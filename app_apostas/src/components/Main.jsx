import { useEffect, useState } from "react";
import { data } from "../assets/clubs";
import { useForm } from "react-hook-form";

function Main() {
  const [clubs, setClubs] = useState([]);
  const { register, watch } = useForm()

  useEffect(() => {
    setClubs(data);
    console.log(data);
  }, []);

  const clubsList = clubs.map(club => (
    <div class="form-check" key={club.id}>
      <input class="form-check-input" type="radio" name="rbClub" {...register('rbClub')} value={club.url} />
      <label class="form-check-label" >{club.name}</label>
    </div>
  ));


  return (
    <>
      <div className="container" style={{ height: 500 }}>
        <h2 className="mt-4">Quem será o campeão Brasileiro?</h2>
        <form>
          {clubsList}
        </form>
        <h6>Você selecionou:</h6>
        { watch("rbClub") && 
        <img src={watch("rbClub")} alt="logo do clube" width={240}/>
}
      </div>
    </>
  );
}

export default Main;
