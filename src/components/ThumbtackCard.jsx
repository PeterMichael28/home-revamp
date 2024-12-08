/* eslint-disable prettier/prettier */
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import { Clock, MapPin, Trophy } from "lucide-react";
import { cn } from "~/lib/utils";

export default function ThumbtackCard({ data }) {
  return (
    <Card className="p-4 sm:p-6 w-full mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Profile Image */}
        <div className=" flex justify-center h-fit">
          <img
            src={data?.image_url}
            alt="Profile"
            className="w-32 sm:min-w-[150px] sm:h-[150px] rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className=" space-y-3 sm:space-y-4 w-full">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 w-full ">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold capitalize">{data?.business_name}</h2>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1">
                {data?.is_top_pro && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 text-blue-600 flex items-center gap-1 text-xs sm:text-sm"
                  >
                    <Trophy className="w-3 h-3" />
                    Top Pro
                  </Badge>
                )}
                <span className="text-green-500 font-medium text-sm sm:text-base">
                  Exceptional {`${Number((data?.rating ?? 0).toFixed(1))}`}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: Math.ceil(data?.rating) ?? 0 }).map((star, i) => (
                    <span key={i} className="text-green-500 text-sm sm:text-base">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-500 text-sm sm:text-base">{`(${data?.num_reviews})`}</span>
              </div>
            </div>
            {/* 
            <div className="max-w-[300px] flex flex-wrap gap-3 items-center"></div>
            {data?.pills &&
              data.pills.length > 0 &&
              data.pills.map((pill, i) => (
                <Badge key={i} variant="outline" className={cn("bg-green-50 text-green-600 font-medium text-xs sm:text-sm")}>
                  {pill}
                </Badge>  
              ))} */}
            <Badge variant="outline" className={cn("bg-green-50 w-fit text-green-600 font-medium text-xs sm:text-sm")}>
              Free on-site estimate
            </Badge>
          </div>

          {/* Stats */}
          <div className="space-y-1 text-gray-500 text-sm sm:text-base">
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4 flex-shrink-0" />
              <span>{data?.num_hires ?? 0} hires on Thumbtack</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Serves {data?.location ?? "country wide"}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>Responds in about {Math.ceil(data?.response_time_hours)} hours</span>
            </div>
          </div>

          {/* Review */}
          {/* <div className="text-gray-600 text-sm sm:text-base">
            <span className="font-medium">Nicole B.</span> says, {data?.introduction}
            <button className="text-blue-500 hover:underline ml-1">See more</button>
          </div> */}
          <p className="text-gray-600 text-sm sm:text-base line-clamp-2  overflow-hidden w-full">
            {data?.introduction}
          </p>

          {/* Action Button */}
          <div>
            <Button className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto">
              <a href={data?.thumbtack_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
