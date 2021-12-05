import React , {useState} from 'react'
import './eventServece.css'
const EventServece = () => {
const [dataServicios, setDataService] = useState({
    servicio:'',
    decription: '',
    tarifas:'',
    horarios: '',
    lugar:''
});
    return (
        <div className="container moden">
            <form>
                <input name="servicio" placeholder="ingrese su servicio" onChange={setDataService} />
                <input name="description" placeholder="ingrese la descriptcion de su servicio" onChange={setDataService}/>
                <div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span> 
</div>                <input name="horarios" placeholder="ingrese su horario de atencion" onChange={setDataService}/>
                <input name="lugar" placeholder="ingrese el lugar" onChange={setDataService}/>
                <button type="submit" class="btn btn-success">Success</button>
            </form>
        </div>
    )
}

export default EventServece
