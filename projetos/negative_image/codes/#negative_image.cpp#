#include <iostream>
#include <opencv2/highgui.hpp>

using namespace cv;
using namespace std;

int getx(Mat image);
int gety(Mat image);

int main(int, char**){
	Mat 	image;
	string 	archive;
	int 	x1,y1,x2,y2;

	cout << "Insert the image's name: ";
	cin  >> archive;

	image = imread("../images/" + archive,CV_LOAD_IMAGE_COLOR);
	if(!image.data){cout << "Reading Error of " << archive << endl; return 0;}

	cout << "Image size: " << image.rows << " x " << image.cols << endl;

	cout << "Please, insert the coordenates X and Y of point P1:" << endl;
	x1 = getx(image);
	y1 = gety(image);

	cout << "Please, insert the coordenates X and Y of point P2:" << endl;
	x2 = getx(image);
	y2 = gety(image);

	for(int i=x1; i<=x2; i++){
		for(int j=y1; j<=y2; j++){
			image.at<Vec3b>(i,j)[0] = ~(image.at<Vec3b>(i,j)[0]);
			image.at<Vec3b>(i,j)[1] = ~(image.at<Vec3b>(i,j)[1]);
			image.at<Vec3b>(i,j)[2] = ~(image.at<Vec3b>(i,j)[2]);
		}
	}
	
	
	imwrite("../images/negative_" + archive, image);
	namedWindow("janela",CV_WINDOW_KEEPRATIO);
	imshow("janela", image);
	waitKey();

	return 0;
}


int getx(Mat image){
	int x;
	do{
	cout << "X: ";
	cin  >> x;
	if(x > image.rows || x <= 0) cout << "Invalid position." << endl;
	}while(x > image.rows || x <= 0);
	return x - 1;
}

int gety(Mat image){
	int y;
	do{
	cout << "Y: ";
	cin  >> y;
	if(y > image.cols || y <= 0) cout << "Invalid position." << endl;
	}while(y > image.cols || y <= 0);
	return y;
}


