export default class Intersection {
    static isFigureInFigure(figure1, figure2) {
        let result = false;

        // Fists step - prioection of figures on XOY ray - intersection of boarding box
        if (Intersection.isXORRayIntro(figure1, figure2)) {
            let introcount = 0;
            for (let i = 0; i < figure2.length; i++) {
                if (Intersection.isPointInFigure(figure1, figure2[i])) {
                    ++introcount;
                }
            }

            if (introcount === figure2.length) {
                result = true;
            }
        }

        return result;
    }

    static isIntersectFigure(figure1, figure2) {
        let result = false;

        // Fists step - prioection of figures on XOY ray - intersection of boarding box
        if (Intersection.isXORRayIntersect(figure1, figure2)) {
            // Second step - intersection of sections
            let first1 = { x: figure1[figure1.length - 1].x, y: figure1[figure1.length - 1].y };
            for (let i = 0; i < figure1.length; i++) {
                let first2 = { x: figure2[figure2.length - 1].x, y: figure2[figure2.length - 1].y };
                for (let j = 0; j < figure2.length; j++) {
                    if (Intersection.isSectionIntersectSection({ x: first1.x, y: first1.y },
                        { x: figure1[i].x, y: figure1[i].y },
                        { x: first2.x, y: first2.y },
                        { x: figure2[j].x, y: figure2[j].y })) {
                        result = true;
                    }

                    first2 = { x: figure2[j].x, y: figure2[j].y };
                }

                first1 = { x: figure1[i].x, y: figure1[i].y };
            }

            if (!result) {
                // Step 3. If figura2 in figura1
                if (Intersection.isXORRayIntro(figure1, figure2)) {
                    let introcount = 0;
                    for (let i = 0; i < figure2.length; i++) {
                        if (Intersection.isPointInFigure(figure1, figure2[i])) {
                            ++introcount;
                        }
                    }

                    if (introcount == figure2.length) {
                        result = true;
                    }
                }
            }
        }

        return result;
    }

    static isPointInFigure(figure1, point) {
        let result = false;
        const newPoints = Intersection.getBorderPoints(figure1);

        if (Intersection.isXORRayPoint(figure1, point)) {
            let intercectcount = 0;
            let first1 = { x: figure1[figure1.length - 1].x, y: figure1[figure1.length - 1].y };
            for (let i = 0; i < figure1.length; i++) {
                if (Intersection.isSectionIntersectSection({ x: first1.x, y: first1.y },
                    { x: figure1[i].x, y: figure1[i].y },
                    { x: point.x, y: point.y },
                    { x: newPoints[1].x + 1, y: point.y })) {
                    ++intercectcount;
                }

                first1 = { x: figure1[i].x, y: figure1[i].y };
            }

            result = intercectcount != 0 && intercectcount % 2 != 0;
        }

        return result;
    }

    static chechRightVector(p1, p2) {
        if (p1.x > p2.x || p1.y > p2.y) {
            let temp = p1.x;
            p1.x = p2.x;
            p2.x = temp;

            temp = p1.y;
            p1.y = p2.y;
            p2.y = temp;
        }

    }


    static isSectionIntersectSection(p1, p2, p3, p4) {
        Intersection.chechRightVector(p1, p2);
        Intersection.chechRightVector(p3, p4);

        const res1 = ((p3.x - p1.x) * (p2.y - p1.y) - (p2.x - p1.x) * (p3.y - p1.y)) *
            ((p4.x - p1.x) * (p2.y - p1.y) - (p2.x - p1.x) * (p4.y - p1.y));
        const res2 = ((p1.x - p3.x) * (p4.y - p3.y) - (p4.x - p3.x) * (p1.y - p3.y)) *
            ((p2.x - p3.x) * (p4.y - p3.y) - (p4.x - p3.x) * (p2.y - p3.y));

        return (res1 <= 0) && (res2 <= 0);
    }

    static getBorderPoints(figure) {
        let newPoints = [];
        newPoints.push({ x: figure[0].x, y: figure[0].y });
        newPoints.push({ x: figure[0].x, y: figure[0].y });

        for (let i = 1; i < figure.length; i++) {
            if (figure[i].x < newPoints[0].x) {
                newPoints[0].x = figure[i].x;
            }

            if (figure[i].x > newPoints[1].x) {
                newPoints[1].x = figure[i].x;
            }

            if (figure[i].y < newPoints[0].y) {
                newPoints[0].y = figure[i].y;
            }

            if (figure[i].y > newPoints[1].y) {
                newPoints[1].y = figure[i].y;
            }
        }

        return newPoints;
    }

    static isXORRayIntersect(figure1, figure2) {
        let result = false;

        const newPoints1 = Intersection.getBorderPoints(figure1);
        const newPoints2 = Intersection.getBorderPoints(figure2);

        if ((newPoints1[0].x <= newPoints2[0].x && newPoints2[0].x <= newPoints1[1].x) ||
            (newPoints1[0].x <= newPoints2[1].x && newPoints2[1].x <= newPoints1[1].x) ||
            (newPoints1[0].y <= newPoints2[0].y && newPoints2[0].y <= newPoints1[1].y) ||
            (newPoints1[0].y <= newPoints2[1].y && newPoints2[1].y <= newPoints1[1].y) ||
            (newPoints2[0].x <= newPoints1[0].x && newPoints1[0].x <= newPoints2[1].x) ||
            (newPoints2[0].x <= newPoints1[1].x && newPoints1[1].x <= newPoints2[1].x) ||
            (newPoints2[0].y <= newPoints1[0].y && newPoints1[0].y <= newPoints2[1].y) ||
            (newPoints2[0].y <= newPoints1[1].y && newPoints1[1].y <= newPoints2[1].y)) {
            result = true;
        }

        return result;
    }

    static isXORRayIntro(figure1, figure2) {
        let result = false;

        const newPoints1 = Intersection.getBorderPoints(figure1);
        const newPoints2 = Intersection.getBorderPoints(figure2);

        if (((newPoints1[0].x <= newPoints2[0].x && newPoints2[0].x <= newPoints1[1].x) &&
            (newPoints1[0].x <= newPoints2[1].x && newPoints2[1].x <= newPoints1[1].x) &&
            (newPoints1[0].y <= newPoints2[0].y && newPoints2[0].y <= newPoints1[1].y) &&
            (newPoints1[0].y <= newPoints2[1].y && newPoints2[1].y <= newPoints1[1].y)) ||
            ((newPoints2[0].x <= newPoints1[0].x && newPoints1[0].x <= newPoints2[1].x) &&
                (newPoints2[0].x <= newPoints1[1].x && newPoints1[1].x <= newPoints2[1].x) &&
                (newPoints2[0].y <= newPoints1[0].y && newPoints1[0].y <= newPoints2[1].y) &&
                (newPoints2[0].y <= newPoints1[1].y && newPoints1[1].y <= newPoints2[1].y))) {
            result = true;
        }

        return result;
    }

    static isXORRayPoint(figure1, point) {
        let result = false;

        const newPoints1 = Intersection.getBorderPoints(figure1);

        if ((newPoints1[0].x <= point.x && point.x <= newPoints1[1].x) ||
            (newPoints1[0].y <= point.y && point.y <= newPoints1[1].y)) {
            result = true;
        }

        return result;
    }

}