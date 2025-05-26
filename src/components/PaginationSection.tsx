"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { PaginationMeta } from "@/types/pagination";
import { FC } from "react";

interface PaginationSectionProps extends PaginationMeta {
  onChangePage: (page: number) => void;
}

// Define a type for page numbers that can be a number or 'ellipsis'
type PageDisplay = number | "ellipsis";

const PaginationSection: FC<PaginationSectionProps> = ({
  page,
  take,
  total,
  onChangePage,
}) => {
  const totalPages = Math.ceil(total / take);

  const handlePrev = () => {
    if (page > 1) {
      onChangePage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      onChangePage(page + 1);
    }
  };

  // Generate array of page numbers to display
  const getPageNumbers = (): PageDisplay[] => {
    const pageNumbers: PageDisplay[] = [];
    const maxPagesToShow = 5; // Maximum number of page buttons to show

    if (totalPages <= maxPagesToShow) {
      // If total pages are less than max to show, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include page 1
      pageNumbers.push(1);

      if (page <= 4) {
        // We're near the beginning
        for (let i = 2; i <= 6 && i < totalPages; i++) {
          pageNumbers.push(i);
        }
        if (totalPages > 7) {
          pageNumbers.push("ellipsis");
        }
        if (totalPages > 1) {
          pageNumbers.push(totalPages);
        }
      } else if (page >= totalPages - 3) {
        // We're near the end
        pageNumbers.push("ellipsis");
        const startPage = Math.max(2, totalPages - 5);
        for (let i = startPage; i < totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // We're in the middle
        pageNumbers.push("ellipsis");
        for (let i = page - 2; i <= page + 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  // Don't render pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination className="my-12">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrev();
              }}
            />
          </PaginationItem>
        )}

        {pageNumbers.map((pageNum, index) => (
          <PaginationItem key={index}>
            {pageNum === "ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onChangePage(pageNum);
                }}
                isActive={page === pageNum}
                className={page === pageNum ? "font-bold text-purple-500" : ""}>
                {pageNum}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {page < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
