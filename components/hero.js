import "../app/globals.css";

export default function Hero(){

    return (
        <section>
            <div
      className="bg-cover bg-center md:min-h-[1000px] w-full h-screen"
      style={{ backgroundImage: "url('/hero.jpg')" }}>
            <div className="container p-10 md:pt-40 pt-20 flex md:justify-end justify-center font-fink-heavy">
                <div className="md:h-[300px] md:w-[600px] h-[270px] w-[340px] bg-white opacity-75 rounded-xl flex items-center justify-center">
                <p className="md:p-5 text-center md:h-[300px] md:w-[600px] h-[200px] w-[300px] opacity-100 md:text-[17px] text-[12px] flex items-center">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos. Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.</p>
                </div>
                </div>
                </div>
                <div className="h-2 w-full bg-[#3FA367] items-center drop-shadow"></div>
        </section>
    )
}