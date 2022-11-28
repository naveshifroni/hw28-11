
import './faq.scss'

function Faq(){

    return (

      
        <section className="faqaccordion">

            <div className="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button bgc shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Is there an "official" Mardi Gras?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>No! Mardi Gras is a holiday,</strong> just like Christmas and Easter. It belongs to
                            everyone. Do not believe the claims of businesses who offer "official"
                            Mardi Gras merchandise or an "official" Mardi Gras website. Using the term “official” is
                            just a way for vendors to sell
                            their products or services to those who do not know better. Products or websites are not
                            licensed by the government for
                            Mardi Gras. Each individual parade krewe is responsible for all of its merchandise. In some
                            parts of the country,
                            official organizations control their Mardi Gras celebration, but this is not true in New
                            Orleans.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            When does Mardi Gras start and end?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>The Carnival season always begins on Jan. 6</strong> which is King’s Day (Feast of
                            the Epiphany). Mardi Gras day (Fat Tuesday), however, is on a different day each year.

                            Fat Tuesday changes every year because Easter Sunday is never on the same Sunday each year.
                            Fat Tuesday is always the
                            day before Ash Wednesday.

                            Most visitors plan to arrive no later than the Saturday prior to Mardi Gras day and stay
                            through Ash Wednesday. Check
                            out our dates page to see when Fat Tuesday will fall through the next few years.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What is the weather usually like during Mardi Gras? What should I pack?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>The weather during Mardi Gras can vary from very cold to very warm,</strong> almost
                            hot. Sometimes it will change from one extreme to the other during the same day. It’s a good
                            idea to layer your
                            clothes since a chilly morning may turn into a warm afternoon.

                            Since you will be spending long days outside, pack comfortable shoes and clothes that can
                            get somewhat dirty. Don’t
                            forget to check the forecast for rain. If storms are predicted, then you’ll definitely want
                            to bring a raincoat!

                        </div>
                    </div>
                </div>
                </div>
</section>

    );
};

export default Faq;