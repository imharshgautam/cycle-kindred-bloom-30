
export interface CycleData {
  date: string;
  flowIntensity: number;
  symptoms: string[];
  mood: string;
  notes?: string;
}

export interface PredictionResult {
  nextPeriod: {
    date: string;
    confidence: number;
  };
  ovulation: {
    date: string;
    confidence: number;
  };
  pmsSymptoms: {
    startDate: string;
    likelihood: number;
    predictedSymptoms: string[];
  };
  cycleLength: {
    predicted: number;
    confidence: number;
  };
}

// Simulated AI/ML cycle prediction service
export class CyclePredictionService {
  private static readonly AVERAGE_CYCLE_LENGTH = 28;
  private static readonly OVULATION_DAY = 14;
  private static readonly PMS_START_OFFSET = 5;

  // Simulate LSTM/Logistic Regression predictions
  static predictCycle(historicalData: CycleData[], lastPeriodDate: Date): PredictionResult {
    console.log('AI Cycle Prediction: Analyzing historical data...', historicalData);
    
    // Simulate cycle length analysis
    const cycleLengths = this.analyzeCycleLengths(historicalData);
    const avgCycleLength = cycleLengths.length > 0 
      ? cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length 
      : this.AVERAGE_CYCLE_LENGTH;

    // Predict next period
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + Math.round(avgCycleLength));

    // Predict ovulation
    const ovulationDate = new Date(nextPeriodDate);
    ovulationDate.setDate(ovulationDate.getDate() - this.OVULATION_DAY);

    // Predict PMS symptoms
    const pmsStartDate = new Date(nextPeriodDate);
    pmsStartDate.setDate(pmsStartDate.getDate() - this.PMS_START_OFFSET);

    // Analyze symptom patterns
    const symptomPatterns = this.analyzeSymptomPatterns(historicalData);

    return {
      nextPeriod: {
        date: nextPeriodDate.toISOString().split('T')[0],
        confidence: this.calculateConfidence(cycleLengths.length)
      },
      ovulation: {
        date: ovulationDate.toISOString().split('T')[0],
        confidence: this.calculateConfidence(cycleLengths.length, 0.85)
      },
      pmsSymptoms: {
        startDate: pmsStartDate.toISOString().split('T')[0],
        likelihood: symptomPatterns.pmsLikelihood,
        predictedSymptoms: symptomPatterns.commonSymptoms
      },
      cycleLength: {
        predicted: Math.round(avgCycleLength),
        confidence: this.calculateConfidence(cycleLengths.length, 0.8)
      }
    };
  }

  private static analyzeCycleLengths(data: CycleData[]): number[] {
    // Simulate cycle length analysis from historical data
    const cycleLengths = [];
    for (let i = 1; i < data.length; i++) {
      const current = new Date(data[i].date);
      const previous = new Date(data[i - 1].date);
      const diffTime = Math.abs(current.getTime() - previous.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 20 && diffDays < 40) { // Valid cycle range
        cycleLengths.push(diffDays);
      }
    }
    return cycleLengths;
  }

  private static analyzeSymptomPatterns(data: CycleData[]) {
    const allSymptoms = data.flatMap(d => d.symptoms);
    const symptomCounts = allSymptoms.reduce((acc, symptom) => {
      acc[symptom] = (acc[symptom] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const commonSymptoms = Object.entries(symptomCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([symptom]) => symptom);

    const pmsLikelihood = Math.min(0.9, allSymptoms.length / (data.length * 3));

    return {
      commonSymptoms,
      pmsLikelihood
    };
  }

  private static calculateConfidence(dataPoints: number, baseConfidence = 0.9): number {
    // More data points = higher confidence
    const confidenceBoost = Math.min(0.15, dataPoints * 0.02);
    return Math.min(0.95, baseConfidence - 0.3 + confidenceBoost);
  }
}
