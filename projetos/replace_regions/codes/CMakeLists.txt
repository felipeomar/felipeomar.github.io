cmake_minimum_required(VERSION 2.8)
project( replace_regions )
set(OpenCV_DIR "/usr/local/opencv/share/OpenCV")
find_package( OpenCV REQUIRED )
include_directories( ${OpenCV_INCLUDE_DIRS} )
add_executable( replace_regions replace_regions.cpp )
target_link_libraries( replace_regions ${OpenCV_LIBS} )
