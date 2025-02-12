"use client";

import { Heart, BookOpen, Users, Activity, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { MetricCardProps } from "@/types/module";
import AdminPieChart from "@/components/dashboard/PieChart";




// Dummy data
const topViewedCategories = [
  { name: "Circulatory System", modules: 10, quizzes: 5, students: 15 },
  { name: "Circulatory System", modules: 8, quizzes: 4, students: 12 },
  { name: "Circulatory System", modules: 6, quizzes: 3, students: 10 },
];

const topRatedModules = [
  { name: "Circulatory System A-Z", rating: 4.8, students: 120, reviews: 45 },
  { name: "Circulatory System A-Z", rating: 4.4, students: 98, reviews: 32 },
  { name: "Circulatory System A-Z", rating: 4.2, students: 85, reviews: 28 },
];

const topAnatomy = [
  { name: "Circulatory System", views: 1200 },
  { name: "Circulatory System", views: 980 },
  { name: "Circulatory System", views: 850 },
  { name: "Circulatory System", views: 800 },
  { name: "Circulatory System", views: 840 },
];

const mostAttemptedQuizzes = [
  { name: "Circulatory System Chapter 1", attempts: 450 },
  { name: "Circulatory System Chapter 1", attempts: 380 },
  { name: "Circulatory System Chapter 1", attempts: 320 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const MotionCard = motion(Card);

export default function Dashboard() {
  return (
    <div className="hidden lg:block min-h-screen bg-gray-50 p-8">
      <motion.h1
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard
      </motion.h1>

      {/* Metrics Cards */}
      <motion.div
        className="grid grid-cols-4 gap-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            title: "Total Users",
            value: "100",
            icon: <Users className="h-5 w-5 text-[#742193]" />,
          },
          {
            title: "Total Quizzes",
            value: "100",
            icon: <BookOpen className="h-5 w-5 text-[#742193]" />,
          },
          {
            title: "Total Modules",
            value: "100",
            icon: <Activity className="h-5 w-5 text-[#742193]" />,
          },
          {
            title: "Total Anatomy",
            value: "100",
            icon: <Heart className="h-5 w-5 text-[#742193]" />,
          },
        ].map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </motion.div>

      {/* Middle Section */}
      <motion.div
        className="grid grid-cols-2 gap-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionCard className="p-6" variants={cardVariants} whileHover="hover">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">Top Viewed Category</h2>
            <button className="text-sm text-[#742193]">See all</button>
          </div>
          <motion.div className="space-y-4">
            {topViewedCategories.map((category, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[#742193]">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{category.name}</h3>
                  <div className="flex space-x-4  mt-2 text-sm text-gray-500">
                    <span className="">{category.modules} Modules</span>
                    <span>{category.quizzes} Quizzes</span>
                    <span>{category.students} Students</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MotionCard>

        <MotionCard className="p-6" variants={cardVariants} whileHover="hover">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold  text-xl">Top Rated Modules</h2>
            <button className="text-sm text-[#742193]">See all</button>
          </div>
          <div className="space-y-4">
            {topRatedModules.map((module, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[#742193]">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{module.name}</h3>

                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{module.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500  mt-2">
                      {module.students} Students • {module.reviews} Reviews
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionCard>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="grid grid-cols-2 gap-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <MotionCard className="p-6" variants={cardVariants} whileHover="hover">
          <h2 className="font-bold text-xl">Quizzes</h2>
          <motion.div className="space-y-4 ">
         
              <div className="  flex   items-center   ">
              <h2 className="flex flex-col font-semibold gap-3 items-center">Total Quizzes <span>100</span></h2>
                <div className="">
                  <AdminPieChart />
                </div>
                
              </div>
          </motion.div>

          
          <div className=" flex  justify-between">
                   <p className="text-purple-700">Pre Added: 340</p>
                  <p className="text-yellow-600">AI Generated: 4500</p>
                </div> 
        </MotionCard>{" "} */}


        <MotionCard className="p-6" variants={cardVariants} whileHover="hover">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">Quizzes</h2>
            <h2 className="font-bold text-xl">Total Quizzes : 100</h2>
          </div>
          <motion.div className="flex justify-center items-center -mt-7 ">
          {/* <div className="flex justify-center items-center  bg-gray-100"> */}
      <AdminPieChart />
    {/* </div> */}
          </motion.div>
        </MotionCard>

      



        <MotionCard className="p-6" variants={cardVariants} whileHover="hover">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Top Anatomy</h2>
            <button className="text-sm text-[#742193]">See all</button>
          </div>
          <div className="space-y-4">
            {topAnatomy.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[#742193]">
                  {index + 1}
                </div>
                <Image
                  src="/images/Heart.png"
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <button className="text-sm text-[#742193] hover:underline flex justify-center items-center gap-1">
                      <span>
                        <Eye className="text-[#742193] h-4 w-4" />
                      </span>{" "}
                      View
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.views} Views
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionCard>
      </motion.div>

      {/* Most Attempted Quizzes */}
      <MotionCard
        className="p-6"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Most Attempted Quizzes</h2>
          <button className="text-sm text-[#742193]">See all</button>
        </div>
        <div className="space-y-4">
          {mostAttemptedQuizzes.map((quiz, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full mt-4 bg-purple-100 flex items-center justify-center text-[#742193]">
                {index + 1}
              </div>
              <Image
                src="/images/module.png"
                alt={quiz.name}
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{quiz.name}</h3>
                    <span className="text-sm text-gray-500  mt-2">
                      10 Question • 35 min
                    </span>
                  </div>
                  <button className="text-sm text-[#742193] hover:underline flex justify-center items-center gap-1">
                    <span>
                      <Eye className="text-[#742193] h-4 w-4" />
                    </span>{" "}
                    View
                  </button>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {quiz.attempts} Attempts
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionCard>
    </div>
  );
}

function MetricCard({ title, value, icon }: MetricCardProps) {
  return (
    <MotionCard className="p-4" variants={cardVariants} whileHover="hover">
      <motion.div
        className="flex flex-col justify-between "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between ">
          <p className="text-xl font-bold">{title}</p>
          <motion.div
            className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center border border-[#742193]"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
        </div>
        <div>
          <motion.h3
            className="text-2xl font-bold "
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            {value}
          </motion.h3>
        </div>
      </motion.div>
    </MotionCard>
  );
}

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
