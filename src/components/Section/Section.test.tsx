import {describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react"
import { Section } from ".";

const sectionData = {
    MenuSectionId: 1,
    Name: "TestSection",
    Description: null,
    DisplayOrder: 1,
    MenuItems: [],
    PublicId: "testid",
    IsDeleted: false,
    IsAvailable: true,
    IsHiddenFromUsers: false,
    ImageName: "sectionImage",
    ImageUrl: "https://example.com",
    CellAspectRatio: 4.0,
    CellLayoutType: 0,
    MenuSectionAvailability: {
        MenuSectionId: 1,
        Availabletimes: null,
        AvailabilityMode: 0,
    },
    ConcessionStoreId: null,
    MenuSectionMetadata: []
}

describe('Section tests', () => {
    it('should render the section name', () => {
        render(<Section section={sectionData}><p></p></Section>);

        expect(screen.getByText("TestSection")).toBeInTheDocument();
    });

    it('should render the children on the page', () => {
        render(<Section section={sectionData}><p>Children</p></Section>);

        expect(screen.getByText("Children")).toBeInTheDocument();
    })
})