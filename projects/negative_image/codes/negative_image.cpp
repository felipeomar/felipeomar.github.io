#include <iostream>
#include <opencv2/highgui.hpp>

using namespace cv;
using namespace std;

int getx(Mat image);
int gety(Mat image);

int main(int argc, char** argv){
	Mat 		image;
	string 	archive;
	CvPoint p1, p2;

	archive = argv=[1];

	image = imread(archive,CV_LOAD_IMAGE_COLOR);
	if(!image.data){cout << "Reading Error of " << archive << endl; return 0;}

	cout << "Image size: " << image.rows << " x " << image.cols << endl;

	cout << "Please, insert the coordenates X and Y of point P1:" << endl;
	p1.x = getx(image);
	p1.y = gety(image);

	cout << "Please, insert the coordenates X and Y of point P2:" << endl;
	p2.x = getx(image);
	p2.y = gety(image);

	for(int i=p1.x; i<=p2.x; i++){
		for(int j=p1.y; j<=p2.y; j++){
			image.at<Vec3b>(i,j)[0] = ~(image.at<Vec3b>(i,j)[0]);
			image.at<Vec3b>(i,j)[1] = ~(image.at<Vec3b>(i,j)[1]);
			image.at<Vec3b>(i,j)[2] = ~(image.at<Vec3b>(i,j)[2]);
		}
	}
	return 0;
	
	imwrite(archive, image	);
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


