#include <iostream>
#include <opencv2/highgui.hpp>

using namespace cv;
using namespace std;

int main(){
	Mat image,region1,region2,region3,region4, upper, lower, final_image;
	Rect R1,R2,R3,R4;

	image = imread("../images/eiffel.jpg", CV_LOAD_IMAGE_COLOR);
	if(!image.data){
		cout << "Reading error of eiffel.png" << endl;
		return 0;
	}

	
	R1 = Rect(						 0,							0,(image.cols/2),(image.rows/2));
	R2 = Rect((image.cols/2),							0,(image.cols/2),(image.rows/2));
	R3 = Rect(						 0,(image.rows/2),(image.cols/2),(image.rows/2));
	R4 = Rect((image.rows/2),(image.cols/2),(image.cols/2),(image.rows/2));

	region1 = image(R1);
	region2 = image(R2);
	region3 = image(R3);
	region4 = image(R4);
	
	hconcat(region4,region3,upper);
	hconcat(region2,region1,lower);
	vconcat(upper,lower,final_image);
	
	imwrite("../images/eiffel_replaced.jpg", final_image);

	namedWindow("Initial_Image", CV_WINDOW_KEEPRATIO);
  imshow("Initial_Image", image);
	namedWindow("Final_Image",CV_WINDOW_KEEPRATIO);
	imshow("Final_Image",final_image);
	waitKey();

	return 0;
}
