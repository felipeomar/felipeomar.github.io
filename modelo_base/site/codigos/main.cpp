#include <opencv2/opencv.hpp>
#include <iostream>

using namespace cv;
using namespace std;

int main( int argc, char** argv ){
    Mat image;
    image = imread(argv[1], CV_LOAD_IMAGE_COLOR);

    namedWindow( "Display window", WINDOW_KEEPRATIO );
    imshow( "Display window", image );

    waitKey(0);
    return 0;
}
