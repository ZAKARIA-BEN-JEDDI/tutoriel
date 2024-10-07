export default function LanguageSwitcherChild({onLanguageChange}) {

    const handelChange = (e) =>{
        e.preventDefault()
        onLanguageChange(e.currentTarget.dataset.lang)
    }
    return <>
        <div className="row">
            <button type="button" class="btn btn-outline-danger my-3" data-lang="AR" onClick={handelChange} >
                ARABIC
            </button>
            <button type="button" class="btn btn-outline-warning my-3" data-lang="FR" onClick={handelChange} >
                FRANCAIS
            </button>
            <button type="button" class="btn btn-outline-success my-3" data-lang="ANG" onClick={handelChange} >
                ENGLISH
            </button>
        </div>
    </>
}