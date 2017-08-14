#include <iostream>
#include <opencv2/opencv.hpp>

using namespace std;
using namespace cv;

int main(){
	Mat image;
	
	image = imread("eiffel.jpg",CV_LOAD_IMAGE_COLOR);
	namedWindow("Eiffel Tower",WINDOW_AUTOSIZE);
	imshow("Eiffel Tower", image);
	waitKey();

  	return 0;
}
