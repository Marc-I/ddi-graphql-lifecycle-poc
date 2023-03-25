import { makeExecutableSchema } from '@graphql-tools/schema'
import data from './ICPSR2079variables-example.json'
 
const typeDefinitions = /* GraphQL */ `
  type StudyUnitReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type ResourcePackageReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type InternationalIdentifier {
    IdentifierContent: Int
    ManagingAgency: String
  }
  
  type PublicationDate {
    SimpleDate: String
  }
  
  type Title {
    String: String
  }
  
  type Citation {
    InternationalIdentifier: InternationalIdentifier
    PublicationDate: PublicationDate
    Title: Title
  }
  
  type DdiInstance implements Fragment {
    FragmentDdiInstance: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    StudyUnitReference: StudyUnitReference
    ResourcePackageReference: ResourcePackageReference
    Citation: Citation
  }
  
  type TopLevelReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type FragmentInstance {
    Hello: String!
    Fragment: [Fragment]
    TopLevelReference: TopLevelReference
  }

  type VariableSchemeReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type CategorySchemeReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type QuestionSchemeReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type UniverseSchemeReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type ConceptSchemeReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type PhysicalInstanceReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type LogicalProductReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type DataCollectionReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type UserAttributePair {
    AttributeKey: String
    AttributeValue: String
  }
  
  type ResourcePackage implements Fragment {
    FragmentResourcePackage: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    Citation: String
    VariableSchemeReference: VariableSchemeReference
    CategorySchemeReference: [CategorySchemeReference]
    QuestionSchemeReference: QuestionSchemeReference
    UniverseSchemeReference: UniverseSchemeReference
    ConceptSchemeReference: ConceptSchemeReference
    PhysicalInstanceReference: PhysicalInstanceReference
    LogicalProductReference: LogicalProductReference
    DataCollectionReference: DataCollectionReference
    UserAttributePair: UserAttributePair
  }

  type ConceptSchemeName {
    String: String
  }
  
  type ConceptScheme implements Fragment {
    FragmentConceptScheme: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    ConceptSchemeName: ConceptSchemeName
  }

  type UniverseSchemeName {
    String: String
  }
  
  type UniverseScheme implements Fragment {
    FragmentUniverseScheme: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    UniverseSchemeName: UniverseSchemeName
  }
  
  type Category implements Fragment {
    FragmentCategory: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    UserID: Int
  }
  
  type CategoryReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type CategorySchemeName {
    String: String
  }
  
  type CategoryScheme implements Fragment {
    FragmentCategoryScheme: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    UserID: String
    CategoryReference: CategoryReference
    CategorySchemeName: CategorySchemeName
  }

  type CodeListReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type CodeRepresentation {
    CodeListReference: CodeListReference
  }
  
  type VariableRepresentation {
    CodeRepresentation: CodeRepresentation
  }
  
  type Label {
    Content: String
  }
  
  type VariableName {
    String: String
  }
  
  type UserAttributePair {
    AttributeKey: String
    AttributeValue: String
  }
  
  type Variable implements Fragment {
    FragmentVariable: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    UserID: String
    VariableRepresentation: VariableRepresentation
    Label: Label
    VariableName: VariableName
    UserAttributePair: [UserAttributePair]
  }

  type DataCollectionModuleName {
    String: String
  }
  
  type DataCollection implements Fragment {
    FragmentDataCollection: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    DataCollectionModuleName: DataCollectionModuleName
  }

  type DataRelationshipReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type LogicalProductName {
    String: String
  }
  
  type LogicalProduct implements Fragment {
    FragmentLogicalProduct: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    DataRelationshipReference: DataRelationshipReference
    LogicalProductName: LogicalProductName
  }

  type LogicalRecordName {
    String: String
  }
  
  type LogicalRecord {
    URN: String
    Agency: String
    ID: String
    Version: Int
    LogicalRecordName: LogicalRecordName
  }
  
  type DataRelationshipName {
    String: String
  }
  
  type DataRelationship implements Fragment {
    FragmentDataRelationship: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    LogicalRecord: LogicalRecord
    DataRelationshipName: DataRelationshipName
  }

  type VariableStatisticsReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type StatisticalSummary {
    VariableStatisticsReference: [VariableStatisticsReference]
  }
  
  type DataFileIdentification {
    DataFileURI: String
  }
  
  type DataRelationshipReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type Title {
    String: String
  }
  
  type Citation {
    Title: Title
  }
  
  type UserAttributePair {
    AttributeKey: String
    AttributeValue: String
  }
  
  type PhysicalInstance implements Fragment {
    FragmentPhysicalInstance: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    StatisticalSummary: StatisticalSummary
    DataFileIdentification: DataFileIdentification
    DataRelationshipReference: DataRelationshipReference
    Citation: Citation
    UserAttributePair: UserAttributePair
  }

  type CategoryStatistic {
    TypeOfCategoryStatistic: String
    Statistic: Int
  }
  
  type CategoryValue {
    Value: Int
  }
  
  type VariableCategory {
    CategoryStatistic: CategoryStatistic
    CategoryValue: CategoryValue
  }
  
  type UnfilteredCategoryStatistics {
    VariableCategory: VariableCategory
  }
  
  type SummaryStatistic {
    TypeOfSummaryStatistic: String
    Statistic: Int
  }
  
  type VariableReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type VariableStatistics implements Fragment {
    FragmentVariableStatistics: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    UnfilteredCategoryStatistics: UnfilteredCategoryStatistics
    SummaryStatistic: [SummaryStatistic]
    VariableReference: VariableReference
  }

  type ResourcePackageReference {
    Agency: String
    ID: String
    Version: Int
    TypeOfObject: String
  }
  
  type RequiredResourcePackages {
    ResourcePackageReference: ResourcePackageReference
  }
  
  type InternationalIdentifier {
    IdentifierContent: Int
    ManagingAgency: String
  }
  
  type CreatorName {
    String: String
  }
  
  type Creator {
    CreatorName: CreatorName
  }
  
  type Title {
    String: String
  }
  
  type Citation {
    InternationalIdentifier: InternationalIdentifier
    Creator: Creator
    Title: Title
  }
  
  type StudyUnit implements Fragment {
    FragmentStudyUnit: String
    URN: String
    Agency: String
    ID: String
    Version: Int
    RequiredResourcePackages: RequiredResourcePackages
    Citation: Citation
  }
  
  interface Fragment {
    URN: String
    Agency: String
    ID: String
    Version: Int
  }

  type Query {
    URN: String!
    FragmentInstance: FragmentInstance
  }
`
 

// type TopLevelReference {
//     Agency: String
//     ID: String
//     Version: Int
//     TypeOfObject: String
//   }
  
//   type FragmentInstance {
//     Fragment: [Fragment]
//     TopLevelReference: TopLevelReference
//   }


const resolvers = {
    Query: {
        URN: () => {
            return [
                'urn', 'ddi',
                data.FragmentInstance.TopLevelReference.Agency,
                data.FragmentInstance.TopLevelReference.ID,
                data.FragmentInstance.TopLevelReference.Version
            ].join(':');
        },
        FragmentInstance: () => ({
            Hello: () => 'Fragment!',
            TopLevelReference: () => data.FragmentInstance.TopLevelReference,
            // TopLevelReference: () => ({
            //     Agency: () => 'was auch immer...'
            // }),
            Fragment: {
                __resolveType (source: any) {
                    if (source.FragmentDdiInstance)         return 'DdiInstance';
                    if (source.FragmentResourcePackage)     return 'ResourcePackage';
                    if (source.FragmentConceptScheme)       return 'ConceptScheme';
                    if (source.FragmentUniverseScheme)      return 'UniverseScheme';
                    if (source.FragmentCategory)            return 'Category';
                    if (source.FragmentCategoryScheme)      return 'CategoryScheme';
                    if (source.FragmentVariable)            return 'Variable';
                    if (source.FragmentDataCollection)      return 'DataCollection';
                    if (source.FragmentLogicalProduct)      return 'LogicalProduct';
                    if (source.FragmentDataRelationship)    return 'DataRelationship';
                    if (source.FragmentPhysicalInstance)    return 'PhysicalInstance';
                    if (source.FragmentVariableStatistics)  return 'VariableStatistics';
                    if (source.FragmentStudyUnit)           return 'StudyUnit';
                }
            }
        })
    }
}
 
export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})