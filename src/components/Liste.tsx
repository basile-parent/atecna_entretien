const Liste = () => {

    // TODO Fetch API https://randomuser.me/api/?results=50

    return (
        <div>
            <header>
                <h1>Liste</h1>
                <button>Rafraichir</button>
            </header>

            <form>
                <label htmlFor="filter">Filtrer </label>
                <input type="text" id="filter" />
                <button type="submit">Valider</button>
            </form>

            <div>
                Heure courante: <time></time>
            </div>

            <div>
                Calcul du "score" des utilisateurs:
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Liste