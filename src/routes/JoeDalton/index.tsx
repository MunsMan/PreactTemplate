import { FunctionalComponent, h } from "preact";
import style from "./style.scss";
import data from "./../../contents/JoeDalton/joe.json"

const joeDalton: FunctionalComponent = () => {
    return (
        <div class={style.body}>
            <div class={style.item}>
                <ul class={style.data}>
                    <li>
                        Name: {data.name + " " + data.surname} 
                    </li>
                    <li>
                        Birthday: {data.birthday} -{">"} Age: {data.age} 
                    </li>
                    <li>
                        Sex: {data.sex}
                    </li>
                    <li>
                        Height: {data.height} Weight: {data.weight}
                    </li>
                </ul>
            </div>
            <div class={style.item}>
                <img class={style.image} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a9529e8-cf9b-4b7b-a70d-ad27fd90ae1c/d8kksap-4b5f682f-3833-4525-85c8-1f5778092ae6.jpg/v1/fill/w_1024,h_1291,q_75,strp/joe_dalton_old_show_style_by_mirinata-d8kksap.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzRhOTUyOWU4LWNmOWItNGI3Yi1hNzBkLWFkMjdmZDkwYWUxYy9kOGtrc2FwLTRiNWY2ODJmLTM4MzMtNDUyNS04NWM4LTFmNTc3ODA5MmFlNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCIsImhlaWdodCI6Ijw9MTI5MSJ9XV0sIndtayI6eyJwYXRoIjoiL3dtLzRhOTUyOWU4LWNmOWItNGI3Yi1hNzBkLWFkMjdmZDkwYWUxYy9taXJpbmF0YS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.OO1TFXaO3pLxE1w9mVec3Z9e_1oPx4_07HUTYyymmzg"/>
            </div>
        </div>
    );
}

export default joeDalton;
