setTimeout(() => {
        // Function to modify the Fall 2023 PSAT score
        function modifyPsat2023() {
            const psat2023Card = document.querySelector('div[aria-label="PSAT/NMSQT Fall 2023 Administration taken on 2023-10-24"]');
            
            if (psat2023Card) {
                // Set total score to 1500
                const totalScore = psat2023Card.querySelector('.total-score .cb-font-size-xlarge-res');
                if (totalScore) {
                    totalScore.textContent = '1500';
                }

                // Set Reading and Writing and Math scores to 750 each
                const readingWritingScore = psat2023Card.querySelector('[data-qc-id*="db-Reading and Writing"] .cb-paragraph4-res');
                const mathScore = psat2023Card.querySelector('[data-qc-id*="db-Math"] .cb-paragraph4-res');
                
                if (readingWritingScore && mathScore) {
                    readingWritingScore.textContent = '750';
                    mathScore.textContent = '750';
                }
            } else {
                console.warn('PSAT/NMSQT Fall 2023 score card not found');
            }
        }

        // Function to modify the SAT score, date, and title
        function modifySatCard() {
            const satCard = document.querySelector('div[aria-label="SAT May 4, 2024 Administration taken on May 4, 2024"]');

            if (satCard) {
                // Update the test title to just "SAT"
                const satTitle = satCard.querySelector('.cb-h3');
                if (satTitle) {
                    satTitle.textContent = 'SAT';
                }

                // Update the test date to December 1, 2023
                const testDate = satCard.querySelector('#test-date-2237 p');
                if (testDate) {
                    testDate.textContent = 'December 1, 2023';
                }

                // Set total score to 1560
                const totalScore = satCard.querySelector('.total-score .cb-font-size-xlarge-res');
                if (totalScore) {
                    totalScore.textContent = '1560';
                }

                // Set Reading and Writing score to 770 and Math score to 790
                const readingWritingScore = satCard.querySelector('[data-qc-id*="db-Reading and Writing"] .cb-paragraph4-res');
                const mathScore = satCard.querySelector('[data-qc-id*="db-Math"] .cb-paragraph4-res');
                
                if (readingWritingScore && mathScore) {
                    readingWritingScore.textContent = '770';
                    mathScore.textContent = '790';
                }
            } else {
                console.warn('SAT score card not found');
            }
        }

        // Execute the modifications after a 3-second delay
        modifyPsat2023();
        modifySatCard();
    }, 3000);
