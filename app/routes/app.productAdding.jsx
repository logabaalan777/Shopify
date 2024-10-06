import {
    Box,
    Card,
    Layout,
    Link,
    List,
    Page,
    Text,
    BlockStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function AdditionalPage() {
    return (
        <Page>
            <TitleBar title="Additional page" />
            <Layout>
                <Layout.Section>
                    <Card>

                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
