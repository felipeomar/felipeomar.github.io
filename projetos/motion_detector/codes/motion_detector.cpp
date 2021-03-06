#include <iostream>
#include <unistd.h>
#include <opencv2/opencv.hpp>

using namespace cv;
using namespace std;

int main(int argc, char** argv){
  	Mat image,image2, saida;
  	int larg, alt;


  	//Variáveis necessárias para a construção do histograma
  	int 		 histSize 	= 64;								//Número de subdivisões horizontais
  	float 		 range[] 	= { 0, 256 };						//Limites inferior e superior do histograma
  	const float* histRange 	= { range };
  	Mat histograma, histograma2;								//Objeto onde o histograma será armazenado


  	//Variáveis para a 'plotagem' do histograma
  	int hist_w 	= histSize;										//Tamanho do histograma será 1 pixel por subdivisão horizontal
  	int hist_h 	= 32;											//Tamanho da altura do histograma (1 pixel por valor possível)
  	Mat histImage (hist_h, hist_w, CV_8UC1, Scalar(0));			//Inicializando as imagens que apresentarão os histogramas
  	Mat histImage2(hist_h, hist_w, CV_8UC1, Scalar(0));

  	double alert, acumulador, media, cont;

  	VideoCapture cap;
  	cap.open(0);

  	if(!cap.isOpened()){
    	cout << "deu ruim";
    	return -1;
    }

	while(1){

   		cap >> image;
   		flip(image,image,1);  									//espelhar a tela pra deixar a visualização mais fiel da realidade
   		cvtColor(image,image,CV_BGR2GRAY); 						//Convertendo RGB para Escala de Cinza
   		usleep(100000);			//100ms delay

   		cap >> image2;
   		flip(image2,image2,1);  									//espelhar a tela pra deixar a visualização mais fiel da realidade
   		cvtColor(image2,image2,CV_BGR2GRAY); 						//Convertendo RGB para Escala de Cinza

   		//Reinicializando as imagens dos histogramas
   		histImage.setTo( Scalar(0));
   		histImage2.setTo(Scalar(0));

   		//Calculando o histograma das imagens
   		calcHist(&image, 1, 0, Mat(), histograma , 1, &histSize, &histRange, true, false);
   		calcHist(&image2, 1, 0, Mat(), histograma2, 1, &histSize, &histRange, true, false);

   		//Normalizando o histograma das imagens
   		// normalize(histograma , histograma , 0, histImage.rows , NORM_MINMAX, -1, Mat());
   		// normalize(histograma2, histograma2, 0, histImage2.rows, NORM_MINMAX, -1, Mat());

   		// //Plotagem do histograma
   		// for(int i = 0; i < histSize; i++){
   		// 	line( histImage, Point(i,hist_h) , Point(i,hist_h-cvRound(histograma.at<float>(i))) , Scalar( 255, 255, 255), 1, 8, 0);
   		// 	line( histImage2,Point(i,hist_h) , Point(i,hist_h-cvRound(histograma2.at<float>(i))), Scalar( 255, 255, 255), 1, 8, 0);
   		// }

   		//Copiando histograma para ser apresentado na saída
   		// histImage.copyTo(image(Rect(0, 0, histSize, hist_h)));
   		// histImage2.copyTo(image2(Rect(0, 0, histSize, hist_h)));

   		alert = compareHist(histograma, histograma2,CV_COMP_CORREL);

   		// acumulador = acumulador + alert;
   		// cont++;
   		// media = acumulador/cont;
   		media = 0.999;

   		// cout << media << endl;

   		if(alert < media){
   			cout << alert << " MOVIMENTO" << endl;
   		}
   		

   		//Apresentação dos resultados
   		namedWindow("entrada", CV_WINDOW_KEEPRATIO);
   		//namedWindow("saida", CV_WINDOW_KEEPRATIO);
   		imshow("entrada", image);
   		//imshow("saida",image2);
		if(waitKey(10) >= 0) break;    	
	}

  	imwrite("saida.png",image2);
  	imwrite("entrada.png",image);
  	return 0;
}