//Trivia que tendra peguntas de historia y de computacion

var 	//botones
		btnPlayerName= document.getElementById("btnSendName"),
		btnComput= document.getElementById("btnComput"),
		btnHistory= document.getElementById("btnHistory"),
		btnGeneral= document.getElementById("btnGeneral"),
		btn5Quest= document.getElementById("btn5Quest"),
		btn10Quest= document.getElementById("btn10Quest"),
		ebtnOpt0,
		ebtnOpt1,
		ebtnOpt2,
		ebtnOpt3,

		//elementos
		eWellcContainer= document.getElementById("wellcome-content"),
		eGameOptionsContainer=document.getElementById("game-options"),
		eQuestOptionContainer= document.getElementById("question-options"),
		eFormContainer= document.getElementById("form-container"),
		eResultsContainer= document.getElementById("results-container"),
		eFormHeader= document.getElementById("form-header"),
		eMainContainer= document.getElementById("main-container"),
		ePlayerName,

		//js
		sSubject, //tema elegido
		nTotalQuest, //numero de preguntas elegido por el usuario
		arrUserQuest, //matriz que contendra las preguntas y resp elgidas al azar para el usuario
		nQuestCounter, //total del preguntas que faltan por responder.
		thisQuestArray= [], //arreglo de datos de la pregunta actual
		index=0, //contador de preguntas
		nCorrect=0, //preguntas correctas
		nIncorrect=0, //Preguntas incorrectas.

  	//array que contiene todas las pregntas y respues posibles del programa
		arrQuestAns=[["La extensión .com es un tipo de archivo?", "System File", "MS Office document", "Image File", "WordPerfect Document File"],["En qué año el simbolo @ fue introducido para los correos electronicos?", "1972", "1980", "1976", "1984"],["La extensión XML se refiere a qué tipo de archivo?","Hypertext related file", "System File", "Image File", "Animation/movile file"],["Cuál es el nombre del siguiente símbolo ^?", "Hash/Sharp", "Colon", "Multiplication", "Caret/Circumflex"],["Cuál compañía produjo el primer disco floppy de 3 1/2 pulgadas?", "Philips en 1980", "IBM en 1971", "Sony en 1981", "Microsoft en 1993"],["Cuál fue el nombre original de Netscape Navigator?", "Mozilla", "Mosaic", "Gecko", "Web Explorer"],["Qué compañía invento el disco Floppy?", "Apple en 1978", "Intel en 1975", "Microsoft en 1983", "IBM en 1971"],["Qué lenguaje de computacion fue creado en 1982, capaz de crear vectores grafico?", "ActionScript", "LiveScript", "Javascript", "PostScript"],["Cuál es el significado de la abreviacion LAN?", "Local Area Network", "Line Adapter Network", "Lotus Applicatin Network", "List All Network"],["Cuál es el significado de la siguiente abreviacion SQL?", "Structured Query Language", "System Query Language", "Standard Query Language", "Symbolic Query Language"],  ["¿A quién se conoció como El Rey Sol?", "A Enrique VIII de Inglaterra", "Luis XIV de Francia", "Carlos I de España", "A Carlomagno"],["Qué dos paises se disputan el control de Cachemira?", "China y Mongolia", "India y Pakistán", "Pakistán y Afganistan", "Afganistán y China"],["Cuál fue el primer país del mundo en prohibir la esclavitud?", "Francia", "Turquía", "Reino Unido ", "Estados Unidos"],["Quién fue el comandante en jefe de las SS, organización militar nazi responsable del holocausto judío?", "Joseph Goebbels", "Heinrich Himmler", "Rudolf Hess", "Walther Darré"],["¿Quién fue el presidente de los Estados Unidos durante la guerra de recesión?", "Franklin D. Roosevelt", "Richard Nixon", "Abraham Lincoln ", "George Washington"],["¿Cuál era la estatura de Napoleón Bonaparte?", "1,68", "1,50", "1,77", "1,63"],["Qué fue la Orden Teutónica?", "La élite de las legiones romanas", "La guardia militar que defendía el Vaticano", "Una órden medieval religioso-militar fundada en Palestina", "Una órden religiosa promovida por Martín Lutero"],["¿Qué guerra tiene el record de haber sido la más costosa de la historia económicamente?", "La Segunda Guerra Mundial", "La Rebelión Taiping (Guerra civil China)", "La Primera Guerra Mundial", "La Guerra de Vietnam"],["¿En qué dinastía egipcia gobernó Nefertiti?", "XX", "X", "XI", "XVIII",],["¿Cuántos siglos duró el Imperio Otomano?", "3 siglos", "Casi 4 siglos", "2 siglos", "Más de 6 siglos"],["¿Qué guerra dio fin con la Batalla de Maratón?", "La Guerra del Peloponeso", "La Guerra de los Treinta Años", "La Primera Guerra Médica", "Las Guerras Púnicas"],["¿Cómo se llama en la actualidad Constantinopla, la capital del Imperio Bizantino?", "Riad", "Estambul", "Teherán", "Bagdad"],["¿Bajo qué guerra se produjo la Guerra de Vietnam", "Bajo la Guerra Fría", "Bajo la II Guerra Mundial", "Bajo la Guerra de Corea","Bajo la Primera Guerra de Indochina"],["Cleopatra VII, última reina de Egipto ¿A qué dinastría perteneció?", "Macedónica", "Dinastía V", "Dinastía I", "Ptolemaica"]];

		arrAnswers=["System File", "1972", "Hypertext related file", "Caret/Circumflex", "Sony en 1981", "Mozilla", "IBM en 1971", "PostScript", "Local Area Network", "Structured Query Language", "Luis XIV de Francia", "India y Pakistán", "Reino Unido", "Heinrich Himmler", "Abraham Lincoln", "1,68", "Una órden medieval religioso-militar fundada en Palestina", "La Segunda Guerra Mundial", "XVIII", "Más de 6 siglos", "La Primera Guerra Médica", "Estambul", "Bajo la Guerra Fría", "Ptolemaica"];


/*----------------------FIN VARIABLES---------------------*/

/*-----------------------INICIO---------------------------*/

	eGameOptionsContainer.style.display="none";
	eQuestOptionContainer.style.display="none";
	eFormHeader.style.display="none";
	eFormContainer.style.display="none";
	eResultsContainer.style.display= "none";
	ePlayerName= document.getElementById("player-name").value="";


//funciones de botones
	btnPlayerName.addEventListener("click", function(){
		
		pError= document.getElementById("pError");
		ePlayerName= document.getElementById("player-name").value;
		validateName (ePlayerName, pError);

	})//fin btnPlayerName

	btnComput.addEventListener("click",function(){
		deleteContent(eGameOptionsContainer);
		sSubject= "Computación";
		eQuestOptionContainer.style.display="block";

	})//fin boton comput

	btnHistory.addEventListener("click",function(){
		deleteContent(eGameOptionsContainer);
		sSubject= "Historia";
		eQuestOptionContainer.style.display="block";

	})//Fin boton history

	btnGeneral.addEventListener("click",function(){
		deleteContent(eGameOptionsContainer);
		sSubject= "General";
		eQuestOptionContainer.style.display="block";

	})//Fin BotonGeneral

	btn5Quest.addEventListener("click", function(){
		nTotalQuest=5;
		nQuestCounter=5;
		displayForm ();

	}) //fin btn5Quest

	btn10Quest.addEventListener("click", function(){
		nTotalQuest=10;
		nQuestCounter=10;
		displayForm ();
	}) //fin btn10Quest


/*-----------------------FIN------------------------------*/

/*------------------------FUNCIONES----------------------*/

//funcio para validar el nombre
	function validateName (ePlayerName, pError) {
		
		if(ePlayerName=="")
		{
			pError.innerHTML= "Debe digitar su nombre.";
		}
		else
		{
			if(/^[A-Z|a-z]{1,15}$/.test(ePlayerName))
			{
				displayMenu (ePlayerName);
			}
			else
			{
				pError.innerHTML="Formato incorrecto, el nombre solo puede contener letras";	
			}
		}
			
	}//fin funcion validateName


//desplega el menu principal
	function displayMenu (pName) {
		var 	eNewPar,
				eGameOptionsContainer=document.getElementById("game-options");

		deleteContent(eWellcContainer);

		eNewPar1= document.createElement("p");
		eNewPar1.innerHTML= "Bienvenido(a) " + pName + ",";
		eWellcContainer.appendChild(eNewPar1);
		eFormHeader.style.display="block";
		eGameOptionsContainer.style.display="block";
}// fin function displayMenu


//funcion para Eliminar contenido de un Elemento	
	function deleteContent(pElement) {
		pElement.innerHTML="";
	}//fin deleteContent.


//funcion Contenedora de todas las funciones a ejecutar al escoger la cantidad de preguntas y el tema
	function displayForm () {
		deleteContent(eMainContainer);
		eFormContainer.style.display="block";
		formHeader () ;
		createForm (sSubject);
		createUserQuestArr();
		insertQuestions (arrUserQuest, index);
		optionButtons();
	}//fin displayForm


//funcion para crear el formulario
	function createForm (pSubjet) { //Tema a jugar
		var 	eForm= document.getElementById("quest-form"),
				eLegend,

				eNewDiv,
				eNewFormPar,
				eNewButton,
				nTotalOptions=4, //cantidad total de opciones para cada pregunta
				eNewButtonId= "questBtn",
				eNewSubmitBtn;
			
		eLegend= document.createElement("legend");
		eLegend.innerHTML=("LaTrivia: ") + pSubjet;
		eForm.appendChild(eLegend);

		eNewDiv= document.createElement("div");
		eNewDiv.id= "divQuest";
		eNewDiv.setAttribute("class", "control-group");

		eNewFormPar= document.createElement("p");
		eNewFormPar.setAttribute("class", "question-label");
		eNewDiv.appendChild(eNewFormPar);

			for(i=0; i<nTotalOptions;i++)
			{
				eNewButton= document.createElement("input");
				eNewButton.setAttribute("type", "button");
				eNewButton.id= "button_Option" + i;
				eNewButton.style.width="380px";
				eNewDiv.appendChild(eNewButton);
			}
			eForm.appendChild(eNewDiv);

		return eForm;
	}//fin create form


//funcion para crear un parrafo para desplegar los resultados parciales,
	function formHeader () {
		var 	eNewResultPar1;

		eNewResultPar1=document.createElement("p");
		eNewResultPar1.id= "p-questCounter";
		eFormHeader.appendChild(eNewResultPar1);
	}//fin formHeader


//funcion para mostrar la cantidad de preguntas que faltan
	function questCounter (nQuestCounter) {
		ePar=document.getElementById("p-questCounter");
		ePar.innerHTML= "Jugador: " + ePlayerName + "<br> Preguntas por contestar: " + nQuestCounter;
	}//fin questCounter


// crea un arreglo de datos con las preguntas en orden aleatorio que va a resolver el usuario y sus respectivas respuestas
	function createUserQuestArr() {
		var 	arrNumbPositions, //Arr num aleato que corresponderan a las preguntas elegidas para el usuario
				nMin, //rangos min y max para elegir los index de las preguntas aleatoriamente
				nMax,
				nColsNumber=6; //numero de columnas que poseera el arreglo de datos usuario

		arrUserQuest= createArray(nTotalQuest, nColsNumber); //crea la matriz de datos con tantas filas como preguntas eligio el usuario y 6 columnas: 0Pregunta, 1-4: opciones, 5:respuesta

		switch (sSubject)
		{
			case "Computación":
					nMin=0;
					nMax=9;
					arrNumbPositions=createPositionNumbArr (nTotalQuest, nMin, nMax);
					pushQuestions (arrNumbPositions);

					break;

			case "Historia":
					nMin=10;
					nMax=23;
					arrNumbPositions=createPositionNumbArr (nTotalQuest, nMin, nMax);
					pushQuestions (arrNumbPositions);

					break;
			
			case "General":
					nMin=0;
					nMax=23;
					arrNumbPositions=createPositionNumbArr (nTotalQuest, nMin, nMax);
					pushQuestions (arrNumbPositions);

					break;
		}//fin switch
		return arrUserQuest;
	}//fin createUserQuestArr


//crear matriz vacia
	function createArray(pRows, pCols) {
			var array;

			array= new Array(pRows);

			for(i=0; i<array.length; i++)
			{
				array[i]= new Array(pCols)
			}
			return array;
	} //fin createArray


//crear arreglos con numeros random para escoger las preguntas aleatoriamente
//entradas: total de numeros a crear, rangos minimo y maximo.
	function createPositionNumbArr (pTotalNumb, pMinNumb, pMaxNumb) {

		var 	arrNumbers= new Array(),
				nNumber;

				nNumber=randomNumbers (pMinNumb, pMaxNumb);

			for(i=0;i<pTotalNumb;i++)
			{
				while(repeated(nNumber,arrNumbers))
				{
					nNumber= randomNumbers (pMinNumb, pMaxNumb);
				}

				arrNumbers.push(nNumber);

			}
			return arrNumbers;
	} //fin createPositionNumbArr


//funcion para verificar que los numeros creados aleatoriamente no se repitan
	function repeated (pNumber, pArray) {
		var 	bRepeated= false;

		for(i=0; i<pArray.length; i++)
		{
			if(pNumber== pArray[i])
			{
				bRepeated= true;
			}
			
		}
		return bRepeated;
	}//fin repeated


//Crear un numero random en un rango definido, entran el valor minimo e el maximo
	function randomNumbers (pMinN, pMaxN) {
		var 	nNumber;
		nNumber= Math.floor(Math.random()*(pMaxN-pMinN+1)) + pMinN;
		return nNumber;
	} //fin randomNumbers


//Poner las preguntas para el usuario en orden aleatorio en un nuevo arreglo
//entrada, arreglo de numeros aleatorios de preguntas.
	function pushQuestions (pArrNumbPositions) {
		var 	arrOptionPosit;
				mTotalOpt=4,
				nMin=1,
				nMax=4;

		arrOptionPosit= createPositionNumbArr (mTotalOpt, nMin, nMax);

		for(i=0; i<pArrNumbPositions.length;i++)
		{
			arrUserQuest[i][0]= arrQuestAns[pArrNumbPositions[i]][0]; //se guarda la pregunta
			arrUserQuest[i][1]= arrQuestAns[pArrNumbPositions[i]][arrOptionPosit[0]]; //opcion1
			arrUserQuest[i][2]= arrQuestAns[pArrNumbPositions[i]][arrOptionPosit[1]]; //opcion2
			arrUserQuest[i][3]= arrQuestAns[pArrNumbPositions[i]][arrOptionPosit[2]]; //opcion 3
			arrUserQuest[i][4]= arrQuestAns[pArrNumbPositions[i]][arrOptionPosit[3]]; //opcion 4
			arrUserQuest[i][5]= arrAnswers[pArrNumbPositions[i]]; //respuesta
		}
	} //fin funcion pushQuestions


//funcion para meter las preguntas y opciones dentro del formulario
	function insertQuestions (pArrQuestUser, index) {  //index viene a ser el numero de pregunta
		var 	formPar, //parrafo donde se va a escribir la pregunta.
				formOptButtons, //arreglo que llama los botones del formulario.
				eButton,
				thisQuestArray= pArrQuestUser[index];

		formPar= eFormContainer.getElementsByTagName("p");
		formPar[0].innerHTML= (index+1) + "."+ thisQuestArray[0]; 

		formOptButtons= eFormContainer.getElementsByTagName("input");

		for(i=0;i<formOptButtons.length;i++) //este length va ser tb el numero de filas del arreglo de preguntas del usuarios
		{
				eButton= formOptButtons[i];
				eButton.value= thisQuestArray[i+1];
		}
		questCounter (nQuestCounter);
	}//fin insertQuestions


//funcion que definira y controlara los botones de respuesta
	function optionButtons() {
		
	ebtnOpt0= document.getElementById("button_Option0");
	ebtnOpt1= document.getElementById("button_Option1");
	ebtnOpt2= document.getElementById("button_Option2");
	ebtnOpt3= document.getElementById("button_Option3");

		ebtnOpt0.addEventListener("click", function(){
			nQuestCounter-=1;
			questionOperatorButton (ebtnOpt0, arrUserQuest);

		})

		ebtnOpt1.addEventListener("click", function(){
			nQuestCounter-=1;
			questionOperatorButton (ebtnOpt1, arrUserQuest);
			
		})

		ebtnOpt2.addEventListener("click", function(){
			nQuestCounter-=1;
			questionOperatorButton (ebtnOpt2, arrUserQuest);
			
		})

		ebtnOpt3.addEventListener("click", function(){
			nQuestCounter-=1;
			questionOperatorButton (ebtnOpt3, arrUserQuest);
			
		})
	}//fin optionButtons

//funcion que controla los botones de respuesta del usuario.
	function questionOperatorButton (pButton, pArrUserQuest) {
		var		sAnswerValue,
				sCorrectAnswer,

			thisQuestArray= pArrUserQuest[index],
			sCorrectAnswer= thisQuestArray[5],
			sAnswerValue= pButton.value;

			questCounter (nQuestCounter);

			if(sCorrectAnswer== sAnswerValue)
			{
				nCorrect++;
				
			}
			else
			{
				nIncorrect++;

			}
			
			index++;

			if(index<nTotalQuest)
			{
				insertQuestions (arrUserQuest, index);
			}
			else
			{
				displayResult ();
			}

	}//fin de questionOperatorButton

//funcion para desplegar los resultados finales
	function displayResult () {
		var 	sMsg="",
				eParResult;

		deleteContent(eFormContainer);
		deleteContent(eFormHeader);
		eResultsContainer.style.display="block";
		sMsg= ("Has terminado la Trivia! <br> Respuestas Correctas: " + nCorrect + ". <br> Respuestas Incorrectas " + nIncorrect + ". <br> Gracias por jugar!!");
		eParResult= document.getElementById("p-Result").innerHTML= sMsg;
	} //fin de displayResult.



	

		


	
	

		