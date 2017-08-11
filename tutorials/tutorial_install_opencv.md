# OpenCV Installation

OpenCV (Open Source Computer Vision Library) is an open source computer vision and machine learning software library. It can be used in the mainly plattaforms and languages, making it portable with the commercial systems. The main objective of this library is work with digital image processing without worrying about codecs, archives structures and anothers complex topics. Thus, we can build an application easily and fast.

This tutorial will show how you can install the OpenCV Library on Linux Ubuntu based distributions, and execute a simple C++ program to test the installation.

## Download and install the prerequisites

OpenCV require some packages installed on your computer. To install these packages, open your terminal and execute:

```
sudo apt-get install build-essential
sudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
sudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev
```

After install the necessary packages, you must to download the library and install in your system. The next steps will show how to do this.

## Download an OpenCV version

To download an OpenCV version, you need to go to [OpenCV page](https://sourceforge.net/projects/opencvlibrary/files/opencv-unix/) and get your favorite version. If you prefer, you can also put the command ***wget*** on your terminal:

```
wget https://sourceforge.net/projects/opencvlibrary/files/opencv-unix/3.3.0/opencv-3.3.0.zip
```
For anothers versions, just modify the version numbers on the website link.

Now, you have to go to the folder where you downloaded the archive and descompact it. On terminal:

```
unzip opencv-3.3.0.zip
```

## Install OpenCV Library

After you download and descompact the OpenCV source file, you will install it. So, you must to change to descompacted folder and create a *build* folder:
```
cd opencv-3.3.0/
mkdir build
cd build
```
After this, the OpenCV installation is realized by the next commands:
```
sudo cmake -D CMAKE_BUILD_TYPE=Release -D CMAKE_INSTALL_PREFIX=/usr/local ..
sudo make -j7 # runs 7 jobs in parallel
sudo make install
```
According these commands, the files of OpenCV are installed on folder **/usr/local**. Thus, for the correct operation, you have to define a ambient variable with this path:
```
export OpenCV_DIR=/usr/local/
```

## Test the installation

To test if your OpenCV installation was sucessful, you need to make a simple code and execute it. In this example, I will show how to do this with the C++ language. In this case, is necessary at least two files: ***CMakeLists.txt*** and a ***.cpp file***. The *.cpp file* will contain your code program, and the file *CMakeLists.txt* will contain some commands to compile and build your program. Let's see an example:
