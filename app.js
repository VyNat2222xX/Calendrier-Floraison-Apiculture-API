// QUERRY SELECTOR
const $flowerContainer = document.querySelector("#mon-conteneur");

// form
const $DATAStart = document.querySelector("#startDate");
const $DATAEnd = document.querySelector("#endDate");
const $form = document.querySelector(".sectionDate");

// MEMORY
const APIurl = "http://10.69.4.8:3001/v1/flowers";

// CODE

$form.addEventListener("submit", async (e) => {
	e.preventDefault();

	console.log($DATAStart.value);
	console.log($DATAEnd.value);

	const response = await fetch(APIurl);
	const DATA = await response.json();

	console.log(DATA);

	for (let i = 0; i < DATA.length; i++) {
		// createElement
		const img1 = document.createElement("img");
		const img2 = document.createElement("img");
		const img3 = document.createElement("img");
		const img4 = document.createElement("img");

		const div1 = document.createElement("div");
		const div12 = document.createElement("div");
		const div13 = document.createElement("div");
		const div132 = document.createElement("div");
		const div14 = document.createElement("div");
		const div142 = document.createElement("div");
		const div143 = document.createElement("div");
		const div144 = document.createElement("div");

		const p1 = document.createElement("p");
		const p2 = document.createElement("p");
		const p3 = document.createElement("p");
		const p4 = document.createElement("p");
		const p5 = document.createElement("p");
		const p6 = document.createElement("p");

		const h3 = document.createElement("h3");

		const span1 = document.createElement("span");
		const span2 = document.createElement("span");

		const article = document.createElement("article");

		//styles
		div1.classList.add("divArt");
		div12.classList.add("divEtoile");
		div12.style = "background-color: #3f774aff";
		div13.classList.add("divFlo");
		div132.classList.add("divFloImg");
		div14.classList.add("propriete");
		div142.classList.add("prop");
		div143.classList.add("propValue");
		div144.classList.add("propValue");

		p1.classList.add("pFlo");
		p2.classList.add("dateArt");
		p3.classList.add("pDesc");
		p4.classList.add("pProp");
		p5.classList.add("pProp");
		p6.classList.add("pProp");

		span1.classList.add("pProp");
		span2.classList.add("pProp");

		//value
		img1.src = DATA[i].image;
		img1.alt = "Image of an " + DATA[i].name;

		//apendChild
	}
});

/*
<article>
	<img class="img" src="http://10.69.4.8:3001/static/aubepine.png" alt="" />
	<div class="divArt">
		<div class="divEtoile" style="background-color: #3f774aff">
			<img src="assets/star.svg" alt="star" /><img src="assets/star.svg" alt="star" /><img
				src="assets/star.svg"
				alt="star"
			/>
		</div>
		<h3 id="h3Art">Aubepine</h3>
		<div class="divFlo">
			<div class="divFloImg">
				<img src="assets/abeille.svg" alt="" />
				<p class="pFlo">Floraison</p>
			</div>
			<p class="dateArt">Avril - Juin</p>
		</div>
		<p class="pDesc">
			Cet arbrisseau herisse d'epines se reconnait a la forme de ses feuilles cn « V » a la
			base et decouples de lobes plus ou moins profonds. Les fleurs cn bouquets, blanches et
			odorantes, sont portees par de petits rameaux. Liles sont surtoul visitees lorsque les
			autres sources de nectar sont rares Flies permetteni la production d'un miel ires
			prise et donnent dcs fruits ovoides, rouges, qui font la joie des oiseaux. Cette
			espece s'adapte a tous types de sols et supporle aussi bicn la lumiere que la
			mi-ombre, f lie forme l'ossature de nombreuses hales sau- vages ou d'ornement, et des
			lisiercs foresticrcs.
		</p>
		<div class="propriete">
			<div class="prop">
				<p class="pProp">Propolis</p>
				<img src="assets/croix.svg" alt="croix" />
			</div>
			<div class="propValue">
				<p class="pProp">Nectar</p>
				<span class="pProp">2</span><progress max="100" value="66"></progress><img />
			</div>
			<div class="propValue">
				<p class="pProp">Pollen</p>
				<span class="pProp">3</span><progress max="100" value="100"></progress><img />
			</div>
		</div>
	</div>
</article>
*/
