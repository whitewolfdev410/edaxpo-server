<div class="col-10 m-auto">
    <h2>Inizia la ricerca</h2>
    <p>Cerca parti di ricambio moto, moto, auto, truck e tir in oltre 15 paesi. Lorem ipsum dolor sit amen.</p<>

    <div class="template">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#ricambi"
                    type="button" role="tab" aria-controls="home" aria-selected="true"><img
                        src="https://edaxpo.insviluppo.net/assets/img/i1.svg"></button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#moto" type="button"
                    role="tab" aria-controls="profile" aria-selected="false"><img
                        src="https://edaxpo.insviluppo.net/assets/img/i2.svg"></button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#auto" type="button"
                    role="tab" aria-controls="profile" aria-selected="false"><img
                        src="https://edaxpo.insviluppo.net/assets/img/i2.svg"></button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#camion" type="button"
                    role="tab" aria-controls="profile" aria-selected="false"><img
                        src="https://edaxpo.insviluppo.net/assets/img/i2.svg"></button>
            </li>
        </ul>
        <div class="tab-content" style="background: black;margin-top: 5px;">

            <div class="tab-pane fade col-10 m-auto p-4 flex-column gap-3" id="moto" role="tabpanel"
                aria-labelledby="home-tab">
                <h2 class="primary">ANNUNCI MOTO</h2>
                <div>
                    <label for="exampleInputEmail1">Inserisci un nuovo annuncio per moto</label>
                </div>
                <div>
                    <iframe src="/form"></iframe>
                </div>
            </div>

            <div class="tab-pane fade show active col-10 m-auto p-4" id="ricambi" role="tabpanel"
                aria-labelledby="home-tab">
                <h2 class="primary">RICAMBI MOTO</h2>
                <div>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Inserisci marca e modello di moto</label>
                            <input type="text" class="form-control" aria-describedby="emailHelp"
                                placeholder="(Es. Honda CBR 600 RR)">
                        </div>
                        <div class="col-12 m-auto">
                            <hr>
                        </div>
                        <div class="gap-3 d-flex">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Ricambio originale</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Ricambio after market</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" checked class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Usato</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Nuovo</label>
                            </div>
                        </div>

                        <button type="button" class="btn btn-outline-danger primary mt-2">Ricerca</button>
                    </form>
                </div>
            </div>

            <div class="tab-pane fade" id="auto" role="tabpanel" aria-labelledby="profile-tab">sez2</div>
            <div class="tab-pane fade" id="camion" role="tabpanel" aria-labelledby="contact-tab">sez3</div>
        </div>
    </div>

</div>